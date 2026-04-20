import BackendApiCard from "../components/BackendApiCard";
import FoundationsCard from "../components/FoundationsCard";
import FrontendArchitecctureCard from "../components/FrontendArchitecctureCard";
import ToolsEnvironmentCard from "../components/ToolsEnvironmentCard";

const SkillsGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <FrontendArchitecctureCard/>
            <FoundationsCard/>
            <BackendApiCard/>
            <ToolsEnvironmentCard/>
        </div>
    )
}

export default SkillsGrid;