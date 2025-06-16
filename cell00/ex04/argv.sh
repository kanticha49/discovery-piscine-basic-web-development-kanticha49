#!/bin/bash

# Check if no arguments are supplied
if [ "$#" -eq 0 ]; then
  echo "No arguments supplied"
elif [$# -eq 1 ]; then   
    echo "$1"
elif [ "$#" -eq 2 ]; then   
    echo "$1"
    echo "$2"
elif [ "$#" -gt 3 ]; then
    echo "$1"
    echo "$2"
    echo "$3"
fi
