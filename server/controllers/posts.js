import Post from "../models/Post.js";

export const paginatedPosts = async (req, res) => {
    
    try {
        //localhsot:5173/posts?page=1&limit=10
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query?.limit) || 10
        const skip = (page - 1 )*limit;

        const [posts, totalPosts] = await  Promise.all([
            Post.find()
                .limit(limit)
                .skip(skip),
            Post.countDocuments()
        ])

        // Page totale
        const totalPages = Math.ceil(totalPosts / limit);
        const  hasMore =  page < totalPages;

        res.status(200).json({posts, hasMore})


    } catch (err) {
        console.error("Une érreur est survenue lors de la récupération: ", err);
        process.exit(1);
    }
}