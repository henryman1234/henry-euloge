import projects from "../utils/projects.json" with {type: "json"}  


export async function getProjectById (req, res) {

    const {id} = req.params

    try {

        const project = projects.find((project) =>  project.id  === Number(id))

        if (!project) throw new Error("Projet inexistant!")

        res.status(200).json(project)
        
    } catch (error) {
        console.error("Une érreur est survenue: ", error);
        process.exit(1);
    }
}

export  async function getProjects (req, res) {
    try {

        res.status(200).json(projects)
    } catch (error) {
        console.error("Une érreur est survenue: ", error);
        process.exit(1)
    }
}



