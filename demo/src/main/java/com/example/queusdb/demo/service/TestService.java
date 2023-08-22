package com.example.queusdb.demo.service;

import com.example.queusdb.demo.client.ChatGPTClientService;
import com.example.queusdb.demo.dto.TestRequest;
import com.example.queusdb.demo.enumerator.NivelEnum;
import com.example.queusdb.demo.enumerator.TipoQuestaoEnum;
import com.theokanning.openai.completion.chat.ChatCompletionRequest;
import com.theokanning.openai.completion.chat.ChatMessage;
import com.theokanning.openai.service.OpenAiService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TestService {

    @Value("${openai.api.chat.default.role}")
    private String defaultRole;

    @Autowired
    private ChatGPTClientService chatGPTClientService;

    public Object execute(TestRequest testRequest) {

        NivelEnum nivelEnum = NivelEnum.getByType(testRequest.getNivel());
        TipoQuestaoEnum tipoQuestao = TipoQuestaoEnum.getByType(testRequest.getQuestoes());

        if(tipoQuestao == null || nivelEnum == null) return null;

        String tipoQuestaoLabel = tipoQuestao.getLabel();
        String nivelLabel = nivelEnum.getLabel();

        String description = "Crie uma prova de " + testRequest.getMateria() + " para alunos do " + testRequest.getAno() +
                " ano do ensino " + nivelLabel + " com " + testRequest.getQuantidadeQuestoes() + " questões " + tipoQuestaoLabel + " sobre " + testRequest.getAssunto()
                + " Retorne no formato JSON com os seguintes atributos: \n -questoes: a lista de questões; \n -cada questão terá: \n\t -enunciado com uma história que se relacione à pergunta da questão; \n\t -resposta correta;  ";

        if(!testRequest.getQuestoes().equals("0"))
        {
            description += "\n\t -opções (a, b, c, d, e);";
        }

        final OpenAiService service = chatGPTClientService.getOpenAiService();
        final ChatCompletionRequest chatRequest = chatGPTClientService.getChatCompletionRequest(List.of(new ChatMessage(defaultRole, description)));

        return service.createChatCompletion(chatRequest).getChoices().get(0).getMessage().getContent();
    }

}
