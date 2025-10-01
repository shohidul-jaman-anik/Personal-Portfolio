import { useQuery } from "react-query";

const LoadProjects = () => {
  // const [projects, setProjects] = useState([])
  // useEffect(() => {
  //   fetch('https://personal-protfolio-server-anik2861.vercel.app/projects')
  //     .then(res => res.json())
  //     .then(data => setProjects(data))
  // }, []);
  const { data: projects, isLoading, error, data } = useQuery("projects", async () => await fetch(`https://personal-protfolio-server-anik2861.vercel.app/projects`)
    .then(res => res.json()))

  return [projects, isLoading]
};

export default LoadProjects;
