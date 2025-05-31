#include <stdio.h>
void printArray(int *A, int n)
{
    for (int i = 0; i < n; i++)
    {
        printf("%d ", A[i]);
    }
    printf("\n");
}
int partition(int A[], int p, int q)
{
    int pivot = A[p];
    int i = p + 1;
    int j = q;
    int temp;
    do
    {
        while (A[i] <= pivot)
        {
            i++;
        }
        while (A[j] > pivot)
        {
            j--;
        }
        if (i < j)
        {
            temp = A[i];
            A[i] = A[j];
            A[j] = temp;
        }
    } while (i < j);
    // Swap A[p] and A[j]
    temp = A[p];
    A[p] = A[j];
    A[j] = temp;
    return j;
}
void quickSort(int A[], int p, int q)
{
    int partitionIndex; // Index of pivot after partition

    if (p < q)
    {
        partitionIndex = partition(A, p, q); 
        quickSort(A, p, partitionIndex - 1);  // sort left subarray 
        quickSort(A, partitionIndex + 1, q); // sort right subarray
    }
}
int main()
{
    int A[] = {9, 4, 4, 8, 7, 5, 6};
    int n = 9;
    n =7;
    printArray(A, n);
    quickSort(A, 0, n - 1);
    printArray(A, n);
    return 0;
}
