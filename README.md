# PyLadies BR Conf

## Setup com docker

```console
$ export JEKYLL_VERSION=3.8
$ docker run --rm  \
 --volume="$PWD:/srv/jekyll" \
 -p 4000:4000 -it jekyll/jekyll:$JEKYLL_VERSION \
 jekyll serve --drafts
```
## Setup local

1. [Instale o Jekyll](http://jekyllrb.com)
2. Faça o fork do [repo](https://github.com/pyladies-brazil/conf/)
3. Clone o repo que acabou de forkar.
4. Run `jekyll serve`

## Tema original

Para mais instruções confira [o repositório do tema original aqui](https://github.com/nrandecker/particle/).