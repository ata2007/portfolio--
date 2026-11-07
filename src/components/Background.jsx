const Background = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-olive" aria-hidden="true">
      <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-sage opacity-[0.05] blur-[150px]" />
      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-sage opacity-[0.05] blur-[150px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-olive/50 to-olive" />
    </div>
  );
};

export default Background;
