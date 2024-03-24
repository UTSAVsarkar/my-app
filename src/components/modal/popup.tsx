import { useId } from "@fluentui/react-hooks";
import {
  getTheme,
  mergeStyleSets,
  FontWeights,
  Modal,
  IIconProps,
  Pivot,
  PivotItem,
} from "@fluentui/react";
import { IconButton, IButtonStyles } from "@fluentui/react/lib/Button";
import { IPopupInt } from "./popupInterface";

export const Popup = (props: IPopupInt) => {
  const titleId = useId("title");

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div>
      <Modal
        titleAriaId={titleId}
        isOpen={props.isOpen}
        onDismiss={() => props.setIsOpen(!props.isOpen)}
        isBlocking={true}
        containerClassName={contentStyles.container}
      >
        <div className={contentStyles.header}>
          <h1 className={contentStyles.heading} id={titleId}>
            {props.cardData.name}
          </h1>
          <IconButton
            styles={iconButtonStyles}
            iconProps={cancelIcon}
            onClick={() => props.setIsOpen(!props.isOpen)}
          />
        </div>
        <div className={contentStyles.body} style={{ fontSize: 20 }}>
          <p>{props.cardData.description}</p>
          <Pivot>
            <PivotItem headerText="Requirements">
              <ol
                role="list"
                style={{
                  padding: 0,
                }}
              >
                {props.cardData.requirements.map((itr, index) => {
                  return (
                    <li
                      key={index}
                      style={
                        {
                          "--i": 1,
                          margin: "2rem auto",
                          padding: "2rem 1rem 1rem",
                          boxShadow: "0.1rem 0.1rem 1.5rem rgba(0, 0, 0, 0.3)",
                          borderRadius: "0.25rem",
                          overflow: "hidden",
                          backgroundColor: "white",
                          position: "relative",
                          counterIncrement: "list",
                          maxWidth: "45rem",
                          borderTop: `5px solid ${getRandomColor()}`,
                          transition: "transform 0.2s ease",
                        } as React.CSSProperties
                      }
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.05)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    >
                      <h3
                        style={{ margin: "0 0 1rem", color: "rgb(70, 70, 70)" }}
                      >
                        {index + 1}. {itr}
                      </h3>
                    </li>
                  );
                })}
              </ol>
            </PivotItem>

            {props.cardData.steps.map((step, index) => {
              return (
                <PivotItem headerText={`Step ${index + 1}`}>
                  <ol role="list" style={{ padding: 0 }}>
                    {step.map((itr) => {
                      return (
                        <li
                          style={
                            {
                              "--i": 1,
                              margin: "2rem auto",
                              padding: "2rem 1rem 1rem",
                              boxShadow:
                                "0.1rem 0.1rem 1.5rem rgba(0, 0, 0, 0.3)",
                              borderRadius: "0.25rem",
                              overflow: "hidden",
                              backgroundColor: "white",
                              position: "relative",
                              counterIncrement: "list",
                              maxWidth: "45rem",
                              borderTop: `5px solid ${getRandomColor()}`,
                            } as React.CSSProperties
                          }
                        >
                          <h3
                            style={{
                              margin: "0 0 1rem",
                              color: "rgb(70, 70, 70)",
                            }}
                          >
                            {itr}
                          </h3>
                        </li>
                      );
                    })}
                  </ol>
                </PivotItem>
              );
            })}
          </Pivot>
        </div>
      </Modal>
    </div>
  );
};

const cancelIcon: IIconProps = { iconName: "Cancel" };

const theme = getTheme();
const contentStyles = mergeStyleSets({
  container: {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "stretch",
    height: window.innerHeight / 2 + 300,
    width: window.innerWidth / 2 + 100,
  },
  header: [
    {
      flex: "1 1 auto",
      borderTop: `4px solid ${theme.palette.themePrimary}`,
      color: theme.palette.neutralPrimary,
      display: "flex",
      alignItems: "center",
      fontWeight: FontWeights.semibold,
      padding: "12px 12px 14px 24px",
    },
  ],
  heading: {
    color: theme.palette.magentaDark,
    fontWeight: FontWeights.semibold,
    fontSize: 30,
    margin: "0",
  },
  body: {
    flex: "4 4 auto",
    padding: "0 24px 24px 24px",
    overflowY: "hidden",
    selectors: {
      p: { margin: "14px 0" },
      "p:first-child": { marginTop: 0 },
      "p:last-child": { marginBottom: 0 },
    },
  },
});
const iconButtonStyles: Partial<IButtonStyles> = {
  root: {
    color: theme.palette.neutralPrimary,
    marginLeft: "auto",
    marginTop: "4px",
    marginRight: "2px",
    fontSize: 30,
  },
  rootHovered: {
    color: theme.palette.neutralDark,
  },
};
