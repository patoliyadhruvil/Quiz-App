import suppliesLogo from "../assets/school-supplies.png";

export default function Header() {
  return (
    <header className="text-center mb-10">
      <img
        className="mx-auto h-32 w-auto rounded-md shadow-lg mb-6"
        src={suppliesLogo}
        alt="Supplies logo"
      />
      <h1 className="text-5xl font-extrabold uppercase tracking-tight text-gray-900">
        React Quiz
      </h1>
    </header>
  );
}
