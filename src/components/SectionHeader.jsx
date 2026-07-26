export default function SectionHeader({ title, right = null }) {
  return (
    <div className="section-header">
      <h2 className="section-title lowercase">
        <span className="section-number">/</span> {title}
      </h2>
      <span className="section-rule" />
      {right}
    </div>
  );
}
