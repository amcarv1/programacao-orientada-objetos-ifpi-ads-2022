#include <stdio.h>
#include <stdlib.h>

int main()
{
    // C permite que um dado seja acessado/interpretado como se fosse outro.
    int num = 10;
    float w = 1.56;

    printf("%f", num); // Acessando um int como se fosse float.
    printf("%i", w); // Acessando um float como se fosse int.

    return 0;
}
