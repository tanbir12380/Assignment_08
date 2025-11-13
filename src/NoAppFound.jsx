import { SearchX } from "lucide-react";

const NoAppFound = () => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "300px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px",
        background: "#f8fafc",
        borderRadius: "8px",
        marginTop: "40px",
      }}
    >
      <SearchX size={48} color="#6b7280" />
      <h2
        style={{
          margin: 0,
          fontSize: "24px",
          fontWeight: "600",
          color: "#1e293b",
          fontFamily: "Inter",
        }}
      >
        No App Found
      </h2>
      <p
        style={{
          margin: 0,
          fontSize: "16px",
          color: "#475569",
          fontFamily: "Inter",
        }}
      >
        Try adjusting your search keywords.
      </p>
    </div>
  );
};

export default NoAppFound;
