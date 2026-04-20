import BackendApiCard from "../../components/skills/BackendApiCard";
import FoundationsCard from "../../components/skills/FoundationsCard";
import FrontendArchitecctureCard from "../../components/skills/FrontendArchitecctureCard";
import ToolsEnvironmentCard from "../../components/skills/ToolsEnvironmentCard";

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