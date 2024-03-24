import { Stack } from "@fluentui/react";

export const Add = () => {
  return (
    <Stack horizontal wrap styles={{ inner: { justifyContent: "center" } }}>
      <div style={{ padding: 10 }}>
        <div
          className="card"
          style={{
            width: "70rem",
            height: "44rem",
            background: "rgba(255, 255, 255, 0.16)",
            borderRadius: 16,
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(5.4px)",
            WebkitBackdropFilter: "blur(5.4px)",
            border: "1px solid rgba(255, 255, 255, 0.17)",
          }}
        ></div>
      </div>
    </Stack>
  );
};
