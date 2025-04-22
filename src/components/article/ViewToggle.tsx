import { motion } from 'framer-motion';
import { Grid, List } from 'lucide-react';

interface ViewToggleProps {
  isGridView: boolean;
  onToggle: () => void;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ isGridView, onToggle }) => {
  return (
    <div className="flex items-center gap-2 mb-6">
      <button
        onClick={onToggle}
        className={`p-2 rounded-lg transition-colors duration-200 ${
          isGridView
            ? 'bg-[#3CAAFF]/10 text-[#3CAAFF]'
            : 'bg-gray-800/50 text-gray-400 hover:text-[#3CAAFF]'
        }`}
        aria-label="Grid view"
      >
        <Grid size={20} />
      </button>
      <button
        onClick={onToggle}
        className={`p-2 rounded-lg transition-colors duration-200 ${
          !isGridView
            ? 'bg-[#3CAAFF]/10 text-[#3CAAFF]'
            : 'bg-gray-800/50 text-gray-400 hover:text-[#3CAAFF]'
        }`}
        aria-label="List view"
      >
        <List size={20} />
      </button>
    </div>
  );
};

export default ViewToggle; 