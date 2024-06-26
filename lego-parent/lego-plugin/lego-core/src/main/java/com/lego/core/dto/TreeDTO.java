package com.lego.core.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class TreeDTO<D extends TreeDTO<D>> extends VersionDTO {

    private static final long serialVersionUID = 1L;

    private String code;
    private String parentCode;
    private List<D> childrens = new ArrayList<D>();

    public void addChildren(D children) {
        this.childrens.add(children);
    }

}
