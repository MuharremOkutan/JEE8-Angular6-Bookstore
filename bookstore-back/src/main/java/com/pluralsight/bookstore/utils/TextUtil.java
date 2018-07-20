package com.pluralsight.bookstore.utils;

public class TextUtil {

    /**
     * Sanitize a String when there is more than a space
     *
     * @param textToSanitize The Text to be sanitized
     * @return Returns the Sanitized Text
     */
    public String sanitize(String textToSanitize) {
        return textToSanitize.replaceAll("\\s+", " ");
    }
}
