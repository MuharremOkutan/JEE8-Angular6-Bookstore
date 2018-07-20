import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'bs-book-list',
  templateUrl: './book-list.component.html',
  styles: []
})
export class BookListComponent implements OnInit {

  nbOfBooks: number = 100;

  books = [
    {
      "id": 1015,
      "title": "jQuery: A Beginner's Guide",
      "description": "Essential Skills--Made Easy!Learn the fundamentals of jQuery programming in no time. jQuery: A Beginner's Guide starts with the basics--from including the library in an HTML document to element selection, event handling, and CSS style manipulation. Next, it's on to JavaScript and the DOM, animation and effects, the Event object, and form validation. The book then delves into AJAX and plugins and covers more advanced techniques such as debugging and unit testing. Get started with jQuery right away using this fast-paced tutorial! Ready-to-use code at www.mhprofessional.com/computingdownload",
      "price": 40,
      "isbn": "0071817913",
      "publicationDate": 1396303200000,
      "nbOfPages": 376,
      "imageUrl": "http://ecx.images-amazon.com/images/I/41qI3mRZp6L._SL160_.jpg",
      "language": "SPANISH"
    },
    {
      "id": 1064,
      "title": "iText in Action: Creating and Manipulating PDF",
      "description": "Imagine a publisher who wants to \"stamp\" his ebooks on the fly with the name of the buyer (to discourage sharing). Such a publisher would (and we know one who does) use iText for the task. Developers looking to enhance web- and other applications with dynamic PDF document generation and/or manipulation will find this book unique in content and readability. Based on ongoing examples that encourage learning \"in action,\" they will finally understand PDF and learn how to build applications that produce professional, high-quality PDF documents. While the basic functionality of iText is easy to acquire, iText in Action lowers the learning curve for more advanced functionality. It explains how to use iText to create/manipulate PDF documents on-the-fly in one or more of the following situations: Due to time or size, the PDF documents can't be produced manuallyThe content of the document must be calculated or based on user input.The content needs to be customized or personalized.The PDF content needs to be served in a web environment.Documents are to be created in \"batch process\" mode. All the examples are written in Java, but they can be easily adapted to .NET by developers using one of the .NET ports: iTextSharp (C#) or iText.NET (#J). While iText is a free Java library and the examples are written from the point of view of the Java developer, nine out of ten examples can be run by .NET developers with only minimal changes. Purchase of the print book comes with an offer of a free PDF, ePub, and Kindle eBook from Manning. Also available is all code from the book.",
      "price": 49.99,
      "isbn": "1932394796",
      "publicationDate": 1166396400000,
      "nbOfPages": 656,
      "imageUrl": "http://ecx.images-amazon.com/images/I/51eqA53HkUL._SL160_.jpg",
      "language": "DEUTSCH"
    },
    {
      "id": 1081,
      "title": "The Service-Oriented Media Enterprise",
      "description": "Companies worldwide are rapidly adopting Service-Oriented Architecture (SOA), a design methodology used to connect systems as services, and Business Process Management (BPM), the art of orchestrating these services. Media organizations from news organizations to music and media download services to movie studios are adapting to SOA-style architectures, but have run into roadblocks unique to the media and entertainment industry. These challenges include incorporating real-time data, moving large amounts of data at one time, non-linearity and flexibility for workflow, and unique metrics and data gathering. The Service-Oriented Media Enterprise details the challenges and presents solutions for media technology professionals. By addressing both the IT and media aspects, it helps individuals improve current enterprise technologies and operations.",
      "price": 64.95,
      "isbn": "0240809777",
      "publicationDate": 1205103600000,
      "nbOfPages": 544,
      "imageUrl": "http://ecx.images-amazon.com/images/I/51a%2Bv2PzbRL._SL160_.jpg",
      "language": "DEUTSCH"
    },
    {
      "id": 1060,
      "title": "The Computer Shelf",
      "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc",
      "price": 9.95,
      "isbn": "1931182332",
      "publicationDate": 1356994800000,
      "nbOfPages": 9,
      "imageUrl": "http://ecx.images-amazon.com/images/I/51NNPS50TRL._SL160_.jpg",
      "language": "RUSSIAN"
    },
    {
      "id": 1054,
      "title": "SCJA Sun Certified Java Associate Study Guide",
      "description": "The best fully integrated study system available for Exam CX-310-019With hundreds of practice questions and hands-on exercises, SCJA Sun Certified Java Associate Study Guide covers what you need to know--and shows you how to prepare--for this challenging exam. 100% complete coverage of all objectives for SCJA Exam CX-310-019Exam Readiness checklist--you're ready for the exam when all objectives on the list are checked off Inside the Exam sections highlight key exam topics coveredTwo-Minute Drills for quick reviewSimulated exam questions match the format, tone, topics, and difficulty of the real exam Covers all the exam topics, including:Packaging, Compiling, and Interpreting Java Code * Java Statements * Java Operators and Strings * Classes and Variables * Variable Scope and Class Construction * Classes and their Relationships * Class Inheritance * Object-oriented Principles * Representing Object-oriented Concepts with UML * Platforms and Integration Technologies * Client-side Technologies * Server-side Technologies CD-ROM includes:Complete MasterExam practice testing engine, featuring: One full practice exam; Detailed answers with explanations; Score Report performance assessment tool Electronic book for studying on the goBonus downloadable MasterExam practice test with free online registration",
      "price": 49.99,
      "isbn": "0071490035",
      "publicationDate": 1250028000000,
      "nbOfPages": 590,
      "imageUrl": "http://ecx.images-amazon.com/images/I/51e6EO5BAdL._SL160_.jpg",
      "language": "ITALIAN"
    },
    {
      "id": 1053,
      "title": "RHCSA/RHCE Red Hat Linux Certification Study Guide",
      "description": "The best fully integrated study system available (Exams EX200 and EX300)With hundreds of review questions and complete coverage of performance-based requirements, RHCSA/RHCE Red Hat Linux Certification Study Guide, Sixth Edition covers what you need to know--and shows you how to prepare--for these challenging exams. Covers all the exam topics, including: Virtual Machines and Automated Installations * Fundamental Command Line Skills * RHCSA-Level Security Options * The Boot Process * Linux Filesystem Administration * Package Management * User Administration * RHCSA-Level System Administration * RHCE Security * System Services and SELinux * RHCE Administration * Mail Servers * Samba * File Sharing * DNS, FTP, and Logging Michael Jang, RHCE, LPIC-2, UCP, LCP, MCP, is the author of three previous bestselling editions of RHCE Red Hat Certified Engineer Linux Study Guide and several other books on Linux and professional certification.",
      "price": 60,
      "isbn": "0071765654",
      "publicationDate": 1310076000000,
      "nbOfPages": 1072,
      "imageUrl": "http://ecx.images-amazon.com/images/I/51O5%2BhX4LYL._SL160_.jpg",
      "language": "ITALIAN"
    },
    {
      "id": 1041,
      "title": "Pro WebSphere Application Server 7",
      "description": "Pro (IBM) WebSphere Application Server 7 Internals covers the internal architecture and implementation of the WebSphere Application Server (WAS) version 7 product set and how other IBM products extend it. It presents information to enable administrators, developers, and architects to learn about the aspects of WAS that apply to them: Administrators will come to understand how the WAS7 environment functions to best optimize it for their environment, and what to do when things go wrong. Developers will learn to extend the functionality in the base WAS product.Architects will see how the WAS product underpins the IBM offerings to fit in an enterprise. What youâ€™ll learnExplore the internal architecture that makes up a modern highâ€“end application server and how other products extend it to provide additional functionality. Implement, deploy, and serve Java EE 5 and other enterprise Java applications.See how the environment all fits together so you can make the best use of the WebSphere Application Server services. Explore how all this works with simple, important code examples.Troubleshoot problems when the inevitable crisis occurs.Who this book is forJava architects wanting to understand how a modern application server worksJava developers targeting the JEE and the WAS7 implementation in particularWAS7 administrators wanting to understand how to optimize the environment for their application behavior and what underpins the errors in the logs when things do go wrong Software architecture students learning how modern system software is architected and implemented Table of ContentsWAS Architecture Outline from 50,000 FeetThe IBM J9 Java Virtual Machine for Java 6Eclipse/OSGi RuntimeUnderlying WAS RuntimeThe EJB ContainerThe Web ContainerWeb ServicesService Integration BusHigh AvailabilityLoad Balancing and ScalabilityConfigurationRelated Products",
      "price": 74.99,
      "isbn": "1430219580",
      "publicationDate": 1246226400000,
      "nbOfPages": 392,
      "imageUrl": "http://ecx.images-amazon.com/images/I/51wU9W4XQWL._SL160_.jpg",
      "language": "RUSSIAN"
    },
    {
      "id": 1042,
      "title": "Pro Spring 2.5",
      "description": "The move from soâ€“called heavyweight architectures, such as Enterprise JavaBeans, toward lightweight frameworks, like Spring, has not stopped since Pro Spring was published by Rob Harrop and Jan Machacek in 2005; in fact, itâ€™s picked up pace. The Spring Framework remains the leader in this move and provides a platform on which you can build your own applications and services. Pro Spring 2.5 covers the new features of Spring 2.5, but moreover, it is focused on the best practices and core standards of contemporary Spring development. As members of the Spring development team at Cake Solutions, the author team brings extensive practical experience gained from working with Spring since version 1.0 and delivering successful systems on top of it. Learn the approaches that really matter in a professional, enterpriseâ€“level environment, so you can apply them to your projects today, safe in the knowledge that they just work. What youâ€™ll learnDiscover how to use Springâ€™s Inversion of Control (IoC)Explore Springâ€™s excellent aspectâ€“oriented programming (AOP) support, including Spring 2.5â€™s new @AspectJ feature Find out how to use Springâ€™s dynamic scripting language features, Spring design patterns, and performance tuning in Spring applications Learn what really works in realâ€“world Spring developmentUnderstand Springâ€™s support for the JDBC framework, Hibernate, the Quartz enterprise scheduler, declarative transaction management, and much more Master Springâ€™s wellâ€“designed MVC framework and add AJAX to your Spring web applications to create flexible, efficient, and manageable applications using the best techniques available Who this book is forEnterprise Java, J2EE/Java EE developers looking to learn and use the Spring meta-framework, the now growing, leading alternative to J2EE/Java EE.",
      "price": 49.99,
      "isbn": "1590599217",
      "publicationDate": 1302040800000,
      "nbOfPages": 920,
      "imageUrl": "http://ecx.images-amazon.com/images/I/51QuqIMmasL._SL160_.jpg",
      "language": "ITALIAN"
    },
    {
      "id": 1080,
      "title": "Pro JSF and HTML5: Building Rich Internet Components",
      "description": "Pro JSF and HTML5 shows you how to leverage the full potential of JavaServer Faces (JSF) and HTML5. This book is for Java developers who aspire to build sophisticated, enterprise-grade web experiences with HTML5-enabled JSF. Written by JSF experts and verified by established community figures, this book will serve as your primary resource, helping you build or integrate well-designed HTML5-enabled JSF components into your rich internet applications. Pro JSF and HTML5 starts by giving you a firm grounding in the design principles of component-based frameworks and the basics of JSF. It then details recent advancements in JSF 2.2 that make it friendlier, faster, and more productive than ever before. And it covers HTML5-enabled components, integration with Java EE7 standards, 3rd party component libraries, security, and performance. The book concludes with a real-world application that puts everything you learned into practice. In this book you'll learn Foundational JSF topics such as the component life cycle, framework architecture, managed beans and CDI, expression language, conversion and validation, JSF events and view parameters. Leveraging new features in JSF 2.2 such as Faces Flow, Resource Library Contracts, and Ajax file uploading. Developing Advanced HTML5 enabled components in JSF 2.2.Creating JSF 2.2 applications that utilize Java EE 7 technologies (CDI, JPA 2.1 and EJB 3.2) for bean management, transaction management and persistence. Building advanced real-world JSF applications with considerations for security, performance, and usability. If you're a Java developer interested in the world of component-based frameworks,Pro JSF and HTML5 is for you. What you'll learn Foundational JSF topics such as the component life cycle, framework architecture, managed beans and CDI (Context and Dependency Injection), expression language, exception handling, conversion and validation, JSF events (faces events, phase events and system events), and view parameters. Utilizing new features in JSF 2.2 such as Faces Flow, Resource Library Contracts, and Ajax file uploading. Developing Advanced HTML5 enabled components in JSF 2.2.Developing PrimeFaces and RichFaces applications.Developing JSF 2.2 applications that utilize Java EE 7 technologies (CDI, JPA 2.1 and EJB 3.2) in order to facilitate bean management, transaction management and persistence. Unit testing JSF applications.Stateless JSF views.Implementing Security in JSF applications.Tuning the performance of JSF applications.Translating application requirements into a model and then implementing the model using JSF 2.2 and Java EE 7 technologies. Who this book is for This is a tutorial and reference is for both intermediate and experienced Java enterprise and web application developers.",
      "price": 54.99,
      "isbn": "1430250100",
      "publicationDate": 1385247600000,
      "nbOfPages": 412,
      "imageUrl": "http://ecx.images-amazon.com/images/I/51NA-Vb5p-L._SL160_.jpg",
      "language": "DEUTSCH"
    }];

  constructor() {
  }

  ngOnInit() {
  }

}
