import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-book-detail',
  templateUrl: './book-detail.component.html',
  styles: []
})
export class BookDetailComponent implements OnInit {

  book = {
    "id": 1042,
    "title": "Pro Spring 2.5",
    "description": "The move from soâ€“called heavyweight architectures, such as Enterprise JavaBeans, toward lightweight frameworks, like Spring, has not stopped since Pro Spring was published by Rob Harrop and Jan Machacek in 2005; in fact, itâ€™s picked up pace. The Spring Framework remains the leader in this move and provides a platform on which you can build your own applications and services. Pro Spring 2.5 covers the new features of Spring 2.5, but moreover, it is focused on the best practices and core standards of contemporary Spring development. As members of the Spring development team at Cake Solutions, the author team brings extensive practical experience gained from working with Spring since version 1.0 and delivering successful systems on top of it. Learn the approaches that really matter in a professional, enterpriseâ€“level environment, so you can apply them to your projects today, safe in the knowledge that they just work. What youâ€™ll learnDiscover how to use Springâ€™s Inversion of Control (IoC)Explore Springâ€™s excellent aspectâ€“oriented programming (AOP) support, including Spring 2.5â€™s new @AspectJ feature Find out how to use Springâ€™s dynamic scripting language features, Spring design patterns, and performance tuning in Spring applications Learn what really works in realâ€“world Spring developmentUnderstand Springâ€™s support for the JDBC framework, Hibernate, the Quartz enterprise scheduler, declarative transaction management, and much more Master Springâ€™s wellâ€“designed MVC framework and add AJAX to your Spring web applications to create flexible, efficient, and manageable applications using the best techniques available Who this book is forEnterprise Java, J2EE/Java EE developers looking to learn and use the Spring meta-framework, the now growing, leading alternative to J2EE/Java EE.",
    "price": 49.99,
    "isbn": "1590599217",
    "publicationDate": 1302040800000,
    "nbOfPages": 920,
    "imageUrl": "http://ecx.images-amazon.com/images/I/51QuqIMmasL._SL160_.jpg",
    "language": "ITALIAN"
  };

  constructor() { }

  ngOnInit() {
  }

}
