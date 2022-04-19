export function Skills({ skill, value }) {
  return (
    <div>
      <div className='testing'>
        <p className='skill-name'>{skill} &nbsp; &nbsp;</p>
        <progress value={value} max={100} />
      </div>
    </div>
  );
}
