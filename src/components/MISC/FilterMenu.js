import { motion } from 'framer-motion';




export default function FilterMenu( { filter, setFilter } ) {
  return (
    <motion.div
      initial = {{ opacity: 0, x: 100 }}
      animate = {{ opacity: 1, x: 0 }}
      transition = {{ delay: 0.3, duration: 0.7 }}
      className = 'flex flex-row bg-darkCream mt-12 rounded-md max-w-max p-0.5'
    >
      <button
        className = {`${
          filter === 'all' && 'bg-offWhite text-darkBlue'
        } flex justify-end px-6 py-2 rounded-sm text-mediumBlue transition-all duration-300`}
        onClick = {() => setFilter( 'all' )}
      >
        All
      </button >
      <button
        className = {`${
          filter === 'pattern' && 'bg-offWhite text-darkBlue'
        } flex justify-end px-6 py-2 rounded-sm text-mediumBlue transition-all duration-300`}
        onClick = {() => setFilter( 'pattern' )}
      >
        Patterns
      </button >
      <button
        className = {`${
          filter === 'lesson' && 'bg-offWhite text-darkBlue'
        } flex justify-end px-6 py-2 rounded-sm text-mediumBlue transition-all duration-300`}
        onClick = {() => setFilter( 'lesson' )}
      >
        Lessons
      </button >
      <button
        className = {`${
          filter === 'experiment' && 'bg-offWhite text-darkBlue'
        } flex justify-end px-6 py-2 rounded-sm text-mediumBlue transition-all duration-300`}
        onClick = {() => setFilter( 'experiment' )}
      >
        Experiments
      </button >
    </motion.div >
  );
}
