package com.experiments.demo.exceptions;

import lombok.Getter;
import lombok.Setter;

public class ProjectIdExceptionResponse {

    @Getter
    @Setter
    private String projectIdentifier;

    public ProjectIdExceptionResponse(String projectIdentifier) {
        this.projectIdentifier = projectIdentifier;
    }
}
