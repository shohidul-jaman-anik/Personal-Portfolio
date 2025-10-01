import React from 'react';
import LoadProjects from '../Hooks/LoadProjects';
import Loading from '../Shared/Loading/Loading';
import "./allProjects.css";
import SingleProject from './SingleProject';


const AllProjects = () => {
    const [projects, isLoading] = LoadProjects()

    // const [projects, setProjects] = useState([])
    // const [pageCount, setPageCount] = useState(0);
    // const [page, setPage] = useState(0)
    // const [size, setSize] = useState(3);

    // useEffect(() => {
    //     fetch(`https://personal-protfolio-server-anik2861.vercel.app/projects?page=${page}&size=${size}`)
    //         .then(res => res.json())
    //         .then(data => setProjects(data))
    // }, []);

    // // For pagination
    // useEffect(() => {
    //     fetch("https://personal-protfolio-server-anik2861.vercel.app/projectCount")
    //         .then(res => res.json())
    //         .then(data => {
    //             const count = data.result;
    //             const page = Math.ceil(count / 3);
    //             // console.log(count, page, "page and page")
    //             setPageCount(page);
    //         })
    // }, [])
    
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className='projectsContainer'>
                {
                    projects?.map(project =>
                        <SingleProject
                            project={project}
                            isLoading={isLoading}
                        ></SingleProject>)
                }
            </div>
            {/* <div className='mainPg text-center '>
                {
                    [...Array(pageCount).keys()].map(number => <button
                        className={page === number ? 'selected' : ''}
                        onClick={() => setPage(number)}
                    >{number + 1}</button>)
                }
                <select onChange={(e) => setSize(e.target.value)}>
                    <option value="10" selected>3</option>
                    <option value="5" >5</option>
                </select>
            </div> */}
        </div>
    );
};

export default AllProjects;