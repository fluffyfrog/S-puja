interface MemberCardProps {
  name: string;
  role: string;
  contact: string;
}

export function MemberCard({ name, role, contact }: MemberCardProps) {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-orange-200 hover:shadow-xl transition-shadow">
      <h3 className="text-orange-800 mb-2">{name}</h3>
      <p className="text-orange-600 mb-1">{role}</p>
      <p className="text-gray-600">{contact}</p>
    </div>
  );
}
