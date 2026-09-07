export interface Project {

    id: number,
    name : string,
    description:  string,
    technologies :  string[],
    goal: string,
    url: string,
    cover: string,
    prev?: string,
    next?: string

    block_one: {
        title: string,
        img: string,
        para_one: string,
        para_two: string,
        para_three?: string,
        para_four?: string,
    },

    
    block_two: Array<string>,

    block_three: {
        title: string,
        img: string,
        para_one: string,
        para_two: string,
        para_three?: string,
        para_four?: string,
    },
    
    block_four: {
        title: string,
        img: string,
        para_one: string,
        para_two: string,
        para_three?: string,
        para_four?: string,
    },

}