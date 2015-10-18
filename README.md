# htmlSelectRelational
Feature de select html possuindo pais e filhos, alterando o seu conteúdo e dos filhos a depender das ações.
> **Criador:** [Leonardo Victor](https://twitter.com/leonardovff)

## Support: 
> - IE9+
> - CHROME 1.0+
> - FIREFOX 1.0+
> - Opera 7+
> - Safari 1+

OBS: Pequenas mudanças e o suporte aumenta, esse é ambiente que tive que atender quando o código foi desenvolvido.

## Como usar: 
1: Insira o js "shrelational.js" em seu projeto, de preferência antes do fim do body.
2: Adicione a classe .selectTree (pode alterar, mudando o valor da variavel selectTreeSelector) em todos os selects que iram fazer parte da feature.
```html
<select class="selectTree">
```

3: Adicone nos selects pais, o data-shr-id="algumCoisaCod". 

```html
<select data-shr-id="@algumaCoisaCod" class="selectTree">
<select data-shr-id="@algumaCoisa2Cod" class="selectTree">
```
Sempre terminando em "Cod" no final, esse valor tem que ser unico a esse select.
4: Adicione a refencia aos pais nas options dos selects filhos:
Caso de apenas um pai
```html
<option data-@alguma-coisa-cod="2" value="7">Quarto 7</option>
```

Caso mais de um pai:
```html
<option data-@alguma-coisa-cod="1" data-@alguma-coisa2-cod="2" value="6">Quarto 6</option>
```

5: Adicione a mensagem de padrão de empty no filho:
```html
<select class="selectTree" data-shr-empty="Sem filho para os pai(s) selecionados">
```

## Observações

Um filho pode ter infinitos pais, um pai pode ter infinitos filhos.
Sem limite de selects.
Caso deseje que um filho seja ligado a mais de um valor do pai, tem duas maneiras.
Separando por virgula o valor:
```html
<option data-@alguma-coisa-cod="5,6" value="5">Segundo 5</option>
```
Reescrevendo a option com o mesmo value, porém o valor da refencia do pai sendo diferente:
```html
<option data-@alguma-coisa-cod="2" value="5">Segundo 4</option>
<option data-@alguma-coisa-cod="5" value="5">Segundo 5</option>
```