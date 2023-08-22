package com.example.queusdb.demo.enumerator;

import java.util.Arrays;

public enum TipoQuestaoEnum {
    ABERTAS(0, "discursivas"), FECHADAS(1, "múltipla escolha"), AMBAS(2, "metade múltipla escolha e metade discursivas");

    private final String label;
    private final int type;

    TipoQuestaoEnum(int type, String label) {
        this.label = label;
        this.type = type;
    }

    public String getLabel() {
        return label;
    }

    public int getType() {
        return type;
    }

    public static TipoQuestaoEnum getByType(String type) {
        return Arrays.stream(TipoQuestaoEnum.values()).filter(tipoQuestaoEnum -> Integer.parseInt(type) == tipoQuestaoEnum.getType()).findFirst().orElse(null);
    }
}
