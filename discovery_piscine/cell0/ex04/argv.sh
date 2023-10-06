#!/bin/bash

if [ $# -eq 0 ]; then
	echo "Debes que escrbir los argumentos"
	exit
fi

i=1;
for argument in "$@"; do
	if [ $i -gt 3 ]; then
		exit
	fi
	echo "Argument - $i: $argument"
	i=$((i + 1));
done

