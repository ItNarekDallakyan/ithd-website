import React, {FC} from "react";
import ReactPaginate from "react-paginate";
import Image from "next/image";

interface PaginationModel {
    page: number,
    pagesCount: number,
    onPageClickCallback: (selected: number) => void
}

interface SelectedPageModel {
    selected: number
}

export const Pagination: FC<PaginationModel> = (
    {
        page,
        pagesCount,
        onPageClickCallback
    }
) => {

    const handlePageClick = (selectedPage: SelectedPageModel) => {
        let {selected} = selectedPage;
        onPageClickCallback(selected);
    }

    return (
        <ReactPaginate
            marginPagesDisplayed={1}
            containerClassName={"flex items-center gap-3"}
            previousLabel={
                <Image
                    title={"Prev Arrow Icon"}
                    loading={"lazy"}
                    quality={80}
                    className={"rotate-90"}
                    width={20}
                    height={20}
                    src={"/images/arrow-icon.svg"}
                    alt={"arrow-icon"}
                />
            }
            nextLabel={
                <img
                    title={"Next Arrow Icon"}
                    loading={"lazy"}
                    className={"rotate-[-90deg]"}
                    width={20}
                    height={20}
                    src={"/images/arrow-icon.svg"}
                    alt={"arrow-icon"}
                />
            }
            breakLinkClassName={"text-dark w-[40px] h-[40px] flex items-center justify-center group-hover:text-white transition-all"}
            breakClassName={"rounded-full bg-carrara group transition-all hover:bg-dark"}
            pageLinkClassName={"text-dark w-[40px] h-[40px] flex items-center justify-center group-hover:text-white transition-all"}
            pageClassName={"rounded-full bg-carrara group transition-all hover:bg-dark"}
            disabledClassName={"opacity-50"}
            activeLinkClassName={"text-white bg-dark rounded-full"}
            onPageChange={handlePageClick}
            forcePage={page}
            pageCount={pagesCount}
        />
    )
}