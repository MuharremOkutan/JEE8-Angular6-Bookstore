package com.pluralsight.bookstore.model;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.Objects;

@Entity
@ApiModel(description = "Book resource representation")
public class Book {

    @Id
    @GeneratedValue
    @ApiModelProperty(value = "The Unique Identifier")
    private Long id;
    @Column(length = 200)
    @NotNull
    @ApiModelProperty(value = "The Title of the Book")
    private String title;
    @Column(length = 10000)
    @ApiModelProperty(value = "The Description of the Book")
    private String description;
    @Column(name = "unit_cost")
    @Min(1)
    @ApiModelProperty(value = "The Price of the Book per unit")
    private Float price;
    @ApiModelProperty(value = "The ISBN Code of the Book")
    private String isbn;
    @Column(name = "publication_date")
    @Temporal(TemporalType.DATE)
    @ApiModelProperty(value = "The Date of Release")
    private Date publicationDate;
    @Column(name = "nb_of_pages")
    @ApiModelProperty(value = "The Number of Pages available")
    private Integer nbOfPages;
    @Column(name = "image_url")
    @ApiModelProperty(value = "The URL of the Front Page")
    private String imageUrl;
    @ApiModelProperty(value = "The Language used in the Book")
    private Language language;

    public Book() {
    }

    public Book(String title, String description, Float price, String isbn, Date publicationDate, Integer nbOfPages, String imageUrl, Language language) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.isbn = isbn;
        this.publicationDate = publicationDate;
        this.nbOfPages = nbOfPages;
        this.imageUrl = imageUrl;
        this.language = language;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Book book = (Book) o;
        return Objects.equals(id, book.id) &&
                Objects.equals(title, book.title) &&
                Objects.equals(description, book.description) &&
                Objects.equals(price, book.price) &&
                Objects.equals(isbn, book.isbn) &&
                Objects.equals(publicationDate, book.publicationDate) &&
                Objects.equals(nbOfPages, book.nbOfPages) &&
                Objects.equals(imageUrl, book.imageUrl) &&
                language == book.language;
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, title, description, price, isbn, publicationDate, nbOfPages, imageUrl, language);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Float getPrice() {
        return price;
    }

    public void setPrice(Float price) {
        this.price = price;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public Date getPublicationDate() {
        return publicationDate;
    }

    public void setPublicationDate(Date publicationDate) {
        this.publicationDate = publicationDate;
    }

    public Integer getNbOfPages() {
        return nbOfPages;
    }

    public void setNbOfPages(Integer nbOfPages) {
        this.nbOfPages = nbOfPages;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Language getLanguage() {
        return language;
    }

    public void setLanguage(Language language) {
        this.language = language;
    }

    @Override
    public String toString() {
        return "Book{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", price=" + price +
                ", isbn='" + isbn + '\'' +
                ", publicationDate=" + publicationDate +
                ", nbOfPages=" + nbOfPages +
                ", imageUrl='" + imageUrl + '\'' +
                ", language=" + language +
                '}';
    }
}
