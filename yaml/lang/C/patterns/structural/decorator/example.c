#include <stdio.h>
#include <stdlib.h>
#include <string.h>

/* Forward declarations */
typedef struct Notification Notification;
typedef struct NotificationVTable NotificationVTable;

/* Component: Notification */
struct NotificationVTable {
    char* (*send)(Notification*);
};

struct Notification {
    NotificationVTable* vtable;
};

/* Concrete Component: Base Notification */
char* BaseNotification_send(Notification* self) {
    return "Base notification: You have a new message!";
}

NotificationVTable baseNotificationVTable = {
    BaseNotification_send
};

Notification* newBaseNotification() {
    Notification* notification = (Notification*)malloc(sizeof(Notification));
    notification->vtable = &baseNotificationVTable;
    return notification;
}

/* Decorator: Notification Decorator */
typedef struct {
    Notification notification;
    Notification* wrapped;
} NotificationDecorator;

char* NotificationDecorator_send(Notification* self) {
    NotificationDecorator* decorator = (NotificationDecorator*)self;
    return decorator->wrapped->vtable->send(decorator->wrapped);
}

/* Concrete Decorator: Sound Notification */
char* SoundNotificationDecorator_send(Notification* self) {
    NotificationDecorator* decorator = (NotificationDecorator*)self;
    char* baseSend = decorator->wrapped->vtable->send(decorator->wrapped);
    char* result = (char*)malloc(strlen(baseSend) + strlen(" (Sound notification: Ding!)") + 1);
    strcpy(result, baseSend);
    strcat(result, " (Sound notification: Ding!)");
    return result;
}

NotificationVTable soundNotificationDecoratorVTable = {
    SoundNotificationDecorator_send
};

Notification* newSoundNotificationDecorator(Notification* wrapped) {
    NotificationDecorator* decorator = (NotificationDecorator*)malloc(sizeof(NotificationDecorator));
    decorator->notification.vtable = &soundNotificationDecoratorVTable;
    decorator->wrapped = wrapped;
    return (Notification*)decorator;
}

/* Concrete Decorator: Priority Notification */
char* PriorityNotificationDecorator_send(Notification* self) {
    NotificationDecorator* decorator = (NotificationDecorator*)self;
    char* baseSend = decorator->wrapped->vtable->send(decorator->wrapped);
    char* result = (char*)malloc(strlen(baseSend) + strlen(" (Priority notification: High priority!)") + 1);
    strcpy(result, baseSend);
    strcat(result, " (Priority notification: High priority!)");
    return result;
}

NotificationVTable priorityNotificationDecoratorVTable = {
    PriorityNotificationDecorator_send
};

Notification* newPriorityNotificationDecorator(Notification* wrapped) {
    NotificationDecorator* decorator = (NotificationDecorator*)malloc(sizeof(NotificationDecorator));
    decorator->notification.vtable = &priorityNotificationDecoratorVTable;
    decorator->wrapped = wrapped;
    return (Notification*)decorator;
}

/* Client code */
int main() {
    Notification* baseNotification = newBaseNotification();
    printf("%s\n", baseNotification->vtable->send(baseNotification));

    Notification* soundNotification = newSoundNotificationDecorator(baseNotification);
    printf("%s\n", soundNotification->vtable->send(soundNotification));

    Notification* priorityNotification = newPriorityNotificationDecorator(baseNotification);
    printf("%s\n", priorityNotification->vtable->send(priorityNotification));
    
    Notification* soundAndPriorityNotification = newPriorityNotificationDecorator(newSoundNotificationDecorator(baseNotification));
    printf("%s\n", soundAndPriorityNotification->vtable->send(soundAndPriorityNotification));
    
    return 0;
}