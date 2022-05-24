export class VMedCarePagedAndSortedResultRequestDto {
    public MaxResultCount: number = 10;
    public SkipCount: number = 0;
    public Sorting: string = "";
    public Search: string = "";
    public totalCount: number = 0;
    public PagesCount: number = 0;
    public CurrentPage: number = 1;
}