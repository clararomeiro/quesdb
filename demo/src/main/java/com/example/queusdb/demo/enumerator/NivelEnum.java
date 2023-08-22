package com.example.queusdb.demo.enumerator;

import java.util.Arrays;

public enum NivelEnum {

    FUNDAMENTALI(0, "fundamental I"), FUNDAMENTALII(1, "fundamental II"), MEDIO(2, "médio");

    private final String label;
    private final int type;

    NivelEnum(int type, String label) {
        this.label = label;
        this.type = type;
    }

    public String getLabel() {
        return label;
    }

    public int getType() {
        return type;
    }

    public static NivelEnum getByType(String type) {
        return Arrays.stream(NivelEnum.values()).filter(nivelEnum -> Integer.parseInt(type) == nivelEnum.getType()).findFirst().orElse(null);
    }

}
