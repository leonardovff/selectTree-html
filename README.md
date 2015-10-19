#htmlRelationalSelect
Feature for html select element, with the parents/children concept. It will change it's content according to the actions.

[See a demo](http://leonardovff.github.io/htmlSelectTree/)
> **Author:** [Leonardo Victor](https://twitter.com/leonardovff)

## Supported Browsers: 
> - IE9+
> - CHROME 1.0+
> - FIREFOX 1.0+
> - Opera 7+
> - Safari 1+

Note: With minor changes, you can include support for older browsers. This is just the enviroment that I had to attend when the code was developed.

## How to use: 

1: Insert the .js file "shrelational.js" into your project, preferably before the end of the body tag.

2: Add the .selectTree class into all selects that will be part of the feature. You can change this class name by modifying the value of "selectTreeSelector" variable.
```html
<select class="selectTree">
```

3: Add data-shr-id="something" into all parents select.

```html
<select data-shr-id="@somethingCod" class="selectTree">
<select data-shr-id="@something2Cod" class="selectTree">
```
Always ending with "Cod", because this value has to be unique to the select.

4: Add a reference to the parents into the options of the children select.
When there is only one parent:
```html
<option data-@something-cod="2" value="7">Fourth 7</option>
```

When there are many parents:
```html
<option data-@something-cod="1" data-@something2-cod="2" value="6">Fourth 6</option>
```

5: Add an empty message to the child:
```html
<select class="selectTree" data-shr-empty="There is no child to the selected parent">
```

## Notes

A child can have on or many parents. As well as a parent can have one or many children.
There is no limit of selects.

If you want a child to be connected to more than one value of the parent, there is two ways:
Splitting the value by commas:
```html
<option data-@something-cod="5,6" value="5">Second 5</option>
```
Rewriting an option with the same value, but changing the parent's reference:
```html
<option data-@something-cod="5" value="5">Second 4</option>
<option data-@something-cod="6" value="5">Second 5</option>
```

## Extras:

To set an option selected, you can use either the default "selected" attribute:
```html
<option selected="on">Second 5</option>
```
Or setting the selected option in data-shr-value:
```html
<select class="selectTree" data-shr-value="@valueOption">
```

If you want an option to list all child's options:
```html
<select class="selectTree" data-shr-value="@valueOption">
```


# htmlRelationalSelect
Feature de select html possuindo pais e filhos, alterando o seu conteúdo e dos filhos a depender das ações.

[veja exemplo](http://leonardovff.github.io/htmlSelectTree/)
> **Criador:** [Leonardo Victor](https://twitter.com/leonardovff)

## Suporte: 
> - IE9+
> - CHROME 1.0+
> - FIREFOX 1.0+
> - Opera 7+
> - Safari 1+

OBS: Com pequenas modificações é possivel aumentar o suporte a browsers mais antigos, esse é apenas o ambiente que tive que atender quando o código foi desenvolvido.

## Como usar: 

1: Insira o js "shrelational.js" em seu projeto, de preferência antes do fim do body.

2: Adicione a classe .selectTree (pode alterar, mudando o valor da variavel selectTreeSelector) em todos os selects que irão fazer parte da feature.
```html
<select class="selectTree">
```

3: Adicone nos selects pais, o data-shr-id="algumCoisaCod". 

```html
<select data-shr-id="@algumaCoisaCod" class="selectTree">
<select data-shr-id="@algumaCoisa2Cod" class="selectTree">
```
Sempre terminando em "Cod" no final, esse valor tem que ser único a esse select.

4: Adicione a refencia aos pais nas options dos selects filhos.
Caso de apenas um pai:
```html
<option data-@alguma-coisa-cod="2" value="7">Quarto 7</option>
```

Caso de mais de um pai:
```html
<option data-@alguma-coisa-cod="1" data-@alguma-coisa2-cod="2" value="6">Quarto 6</option>
```

5: Adicione a mensagem de vazio no filho:
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
<option data-@alguma-coisa-cod="5" value="5">Segundo 4</option>
<option data-@alguma-coisa-cod="6" value="5">Segundo 5</option>
```

## Adicionais:

Para deixar um option selecionado, pode ser usado tanto o padrão selected na option desejada:
```html
<option selected="on">Segundo 5</option>
```
Como também pode setar o valor da seleciona no data-shr-value="@value" no select:
```html
<select class="selectTree" data-shr-value="@valueOption">
```


Caso queira uma opção para que liste todas as options do filho:
```html
<select class="selectTree" data-shr-value="@valueOption">
```
