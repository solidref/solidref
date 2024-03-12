#include <stdio.h>
#include <stdlib.h>

typedef struct Observer Observer;
typedef struct Subject Subject;

struct Observer {
    void (*update)(Observer* self, void* data);
};

struct Subject {
    void (*subscribe)(Subject* self, Observer* observer);
    void (*unsubscribe)(Subject* self, Observer* observer);
    void (*notify)(Subject* self, void* data);
    Observer** observers;
    int observerCount;
};

void subscribe(Subject* self, Observer* observer) {
    self->observers = realloc(self->observers, sizeof(Observer*) * (self->observerCount + 1));
    self->observers[self->observerCount++] = observer;
}

void unsubscribe(Subject* self, Observer* observer) {
    for(int i = 0; i < self->observerCount; i++) {
        if(self->observers[i] == observer) {
            for(int j = i; j < self->observerCount - 1; j++) {
                self->observers[j] = self->observers[j + 1];
            }
            self->observerCount--;
            self->observers = realloc(self->observers, sizeof(Observer*) * self->observerCount);
            break;
        }
    }
}

void notify(Subject* self, void* data) {
    for(int i = 0; i < self->observerCount; i++) {
        self->observers[i]->update(self->observers[i], data);
    }
}

typedef struct {
    Subject base;
} ConcreteSubject;

typedef struct {
    Observer base;
} ConcreteObserver;

void ConcreteObserver_update(Observer* self, void* data) {
    printf("Observer received data: %s\n", (char*)data);
}

Observer* new_ConcreteObserver() {
    ConcreteObserver* observer = malloc(sizeof(ConcreteObserver));
    observer->base.update = ConcreteObserver_update;
    return (Observer*)observer;
}

Subject* new_ConcreteSubject() {
    ConcreteSubject* subject = malloc(sizeof(ConcreteSubject));
    subject->base.subscribe = subscribe;
    subject->base.unsubscribe = unsubscribe;
    subject->base.notify = notify;
    subject->base.observers = NULL;
    subject->base.observerCount = 0;
    return (Subject*)subject;
}

int main() {
    Subject* subject = new_ConcreteSubject();
    
    Observer* observer1 = new_ConcreteObserver();
    Observer* observer2 = new_ConcreteObserver();

    subject->subscribe(subject, observer1);
    subject->subscribe(subject, observer2);

    subject->notify(subject, "Hello Observers!");

    subject->unsubscribe(subject, observer2);
    subject->notify(subject, "Goodbye Observers!");

    free(observer1);
    free(observer2);
    free(subject->observers);
    free(subject);

    return 0;
}