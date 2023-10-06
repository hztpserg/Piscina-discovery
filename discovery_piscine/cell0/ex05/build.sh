#!/bin/bash

if [[ $# -eq 0 ]]; then
	echo "Debes que escribir los nombres de las carpetas"
	exit
fi

for argument in "$@"; do
	carpeta=("ex"$argument);

	if [ -d "$carpeta" ]; then
		echo "La carpeta esta existe"
	else
		mkdir "$carpeta"
		echo "La carpeta $carpeta creada con exito"
	fi
done

