import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {CenteredToolbar} from '../../Header';
import Page from '../Page';
import Box from '@mui/material/Box';
import Code from '../../generic/Code';
import {useParams} from 'react-router-dom';
import {handleChange} from './utils';

export default function CodingPrinciplesSolid() {
  const {principle = 'srp'} = useParams<{principle: string}>();

  const [expanded, setExpanded] = React.useState<string[]>([principle]);

  return (
    <>
      <CenteredToolbar sx={{justifyContent: 'space-between'}}>
        <Typography variant="h2">
          Understanding <i>SOLID</i> Principles
          <br /> in Software Development
        </Typography>
        <Typography variant="h6"></Typography>
      </CenteredToolbar>
      <Page>
        <Box sx={{flexGrow: 1}}>
          <Typography variant="subtitle1" gutterBottom>
            The SOLID principles are a set of design principles in object-oriented programming that enable developers to
            create more maintainable, understandable, and flexible software. Here's a deeper dive into each of these
            principles.
          </Typography>
          <Accordion expanded={expanded.includes('srp')} onChange={handleChange('srp', expanded, setExpanded)}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography variant="h5">Single Responsibility Principle (SRP)</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6" gutterBottom>
                Overview
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                The Single Responsibility Principle asserts that a class should have one, and only one, reason to
                change. This means a class should only have one job or responsibility. The idea here is to organize the
                code in a way that each class addresses a single concern or functionality.
              </Typography>
              <Typography variant="h6" gutterBottom>
                Benefits
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                By adhering to SRP, code becomes more robust. It's easier to debug because changes are isolated to the
                specific part of the code responsible for the feature. It also enhances readability, as each class has a
                clear purpose.
              </Typography>
              <Typography variant="h6" gutterBottom>
                Implementation
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                In practice, if you find a class performing multiple tasks like data access, business logic, and data
                validation, it's time to consider refactoring. Each of these tasks should be a separate class.
              </Typography>
              <Typography variant="h6" gutterBottom>
                Example
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Consider a class ReportGenerator. If it's handling both data retrieval and report generation, it
                violates SRP. Instead, have one class for data retrieval (DataRetriever) and another for report
                generation (ReportBuilder).{' '}
              </Typography>
              <Typography variant="h6" gutterBottom>
                Conclusion
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                SRP is fundamental in minimizing the impact of changes. When a class is responsible for one thing,
                changes in that aspect of the application should only affect that class.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded.includes('ocp')} onChange={handleChange('ocp', expanded, setExpanded)}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
              <Typography variant="h5">Open/Closed Principle (OCP)</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6" gutterBottom>
                Overview
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                The Open/Closed Principle states that software entities (classes, modules, functions, etc.) should be
                open for extension but closed for modification. This means a class's behavior can be extended without
                modifying its source code.
              </Typography>
              <Typography variant="h6" gutterBottom>
                Benefits
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                OCP is critical for reducing the risk of breaking existing functionality when implementing new features.
                It promotes the use of interfaces and abstract classes to allow behaviors to be extended.
              </Typography>
              <Typography variant="h6" gutterBottom>
                Implementation
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                One way to implement OCP is by using abstract classes or interfaces. These can be extended by other
                classes to add new functionality without changing the original class's code.
              </Typography>
              <Typography variant="h6" gutterBottom>
                Example
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Imagine a <Code>PaymentProcessor</Code> class. Instead of modifying it for each payment method, you can
                create an interface <Code>IPaymentMethod</Code> and then extend it for <Code>CreditCardPayment</Code>,{' '}
                <Code>PaypalPayment</Code>, etc.
              </Typography>
              <Typography variant="h6" gutterBottom>
                Conclusion
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                OCP helps in building scalable systems where new functionalities can be added with minimal changes to
                existing code, reducing the likelihood of introducing bugs in already-tested code.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded.includes('lsp')} onChange={handleChange('lsp', expanded, setExpanded)}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
              <Typography variant="h5">Liskov Substitution Principle (LSP)</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6" gutterBottom>
                Overview
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                The Liskov Substitution Principle demands that objects of a superclass shall be replaceable with objects
                of its subclasses without affecting the correctness of the program. Essentially, subclasses should be
                substitutable for their base classes.
              </Typography>
              <Typography variant="h6" gutterBottom>
                Benefits
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                LSP ensures that a subclass can stand in for its superclass. This principle is crucial for ensuring that
                a system remains robust when faced with subclassing, as it guarantees that a subclass does not alter
                expected behavior.
              </Typography>
              <Typography variant="h6" gutterBottom>
                Implementation
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                To follow LSP, ensure that subclasses fulfill the promises made by their base class. This means they
                should not remove base class functionality and should not introduce side effects that are not present in
                the base class.
              </Typography>
              <Typography variant="h6" gutterBottom>
                Example
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                If you have a Bird class with a method fly(), a subclass Penguin should not implement fly() in a way
                that throws an error or does nothing, as penguins can't fly. Instead, consider restructuring the
                hierarchy.
              </Typography>
              <Typography variant="h6" gutterBottom>
                Conclusion
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                LSP is fundamental in inheritance-based architectures. It ensures that subclasses maintain the expected
                behavior, leading to more reliable and easy-to-maintain code.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded.includes('isp')} onChange={handleChange('isp', expanded, setExpanded)}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4a-content" id="panel4a-header">
              <Typography variant="h5">Interface Segregation Principle (ISP)</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6" gutterBottom>
                Overview
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                The Interface Segregation Principle emphasizes that no client should be forced to depend on methods it
                does not use. This principle advocates for creating specific interfaces rather than one general-purpose
                interface.
              </Typography>
              <Typography variant="h6" gutterBottom>
                Benefits
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                ISP leads to a more organized codebase. It reduces the side effects of changes in the interface and
                makes the codebase more adaptable and easier to refactor.
              </Typography>
              <Typography variant="h6" gutterBottom>
                Implementation
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Instead of one large interface, multiple smaller, more specific interfaces should be used. Clients will
                only need to know about the methods that are of interest to them.
              </Typography>
              <Typography variant="h6" gutterBottom>
                Example
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Imagine an interface IWorker with methods work() and eat(). Not all workers might need eat(). In this
                case, it's better to have two interfaces, IWorkable and IEatable, and classes can implement these as
                needed.
              </Typography>
              <Typography variant="h6" gutterBottom>
                Conclusion
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                ISP helps in building flexible systems that can evolve over time without unnecessary dependencies or
                forced implementations, leading to cleaner, more modular code.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded.includes('dip')} onChange={handleChange('dip', expanded, setExpanded)}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5a-content" id="panel5a-header">
              <Typography variant="h5">Dependency Inversion Principle (DIP)</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6" gutterBottom>
                Overview
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                The Dependency Inversion Principle is about decoupling software modules. It states that high-level
                modules should not depend on low-level modules; both should depend on abstractions. Also, abstractions
                should not depend on details, but details should depend on abstractions.
              </Typography>
              <Typography variant="h6" gutterBottom>
                Benefits
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                DIP reduces the direct coupling between high-level and low-level modules, making the system more robust
                and less prone to breakage when individual components are modified or replaced.
              </Typography>
              <Typography variant="h6" gutterBottom>
                Implementation
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Implement DIP by using interfaces or abstract classes to create a layer of abstraction between different
                modules. High-level modules interact with these abstractions rather than directly with low-level modules
              </Typography>
              <Typography variant="h6" gutterBottom>
                Example
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Consider a high-level module OrderProcessor that needs to save data using a Database. Instead of
                directly using a specific database class, OrderProcessor should depend on an IDatabase interface, which
                can be implemented by any specific database class.
              </Typography>
              <Typography variant="h6" gutterBottom>
                Conclusion
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                DIP is a powerful principle for achieving loose coupling and greater modularity in a software system,
                leading to code that is more maintainable and flexible.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Typography variant="subtitle1" gutterBottom>
            In summary, the SOLID principles are crucial for any developer aiming to create scalable, efficient, and
            maintainable software. By adhering to these principles, you can reduce bugs, improve code readability, and
            make your software easier to extend and maintain. While these principles might seem complex initially, their
            benefits in a professional software development environment are immense.
          </Typography>
        </Box>
      </Page>
    </>
  );
}
