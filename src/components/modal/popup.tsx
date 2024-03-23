import { useId } from "@fluentui/react-hooks";
import {
  getTheme,
  mergeStyleSets,
  FontWeights,
  Modal,
  IIconProps,
  Label,
  Pivot,
  PivotItem,
  IStyleSet,
  ILabelStyles,
} from "@fluentui/react";
import { IconButton, IButtonStyles } from "@fluentui/react/lib/Button";
import { IPopupInt } from "./popupInterface";

export const Popup = (props: IPopupInt) => {
  const titleId = useId("title");

  const labelStyles: Partial<IStyleSet<ILabelStyles>> = {
    root: { marginTop: 10 },
  };

  return (
    <div>
      <Modal
        titleAriaId={titleId}
        isOpen={props.isOpen}
        onDismiss={() => props.setIsOpen(!props.isOpen)}
        isBlocking={false}
        containerClassName={contentStyles.container}
      >
        <div className={contentStyles.header}>
          <h1 className={contentStyles.heading} id={titleId}>
            {props.cardData.name}
          </h1>
          <IconButton
            styles={iconButtonStyles}
            iconProps={cancelIcon}
            ariaLabel="Close popup modal"
            onClick={() => props.setIsOpen(!props.isOpen)}
          />
        </div>
        <div className={contentStyles.body}>
          <p>{props.cardData.description}</p>
          <Pivot>
            <PivotItem headerText="My Files">
              <Label styles={labelStyles}>Pivot #1</Label>
            </PivotItem>
            <PivotItem headerText="Recent">
              <Label styles={labelStyles}>Pivot #2</Label>
            </PivotItem>
            <PivotItem headerText="Shared with me">
              <Label styles={labelStyles}>Pivot #3</Label>
            </PivotItem>
            <PivotItem headerText="My Files">
              <Label styles={labelStyles}>Pivot #1</Label>
            </PivotItem>
            <PivotItem headerText="Recent">
              <Label styles={labelStyles}>Pivot #2</Label>
            </PivotItem>
            <PivotItem headerText="Shared with me">
              <Label styles={labelStyles}>Pivot #3</Label>
            </PivotItem>
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
    color: theme.palette.neutralPrimary,
    fontWeight: FontWeights.semibold,
    fontSize: "inherit",
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
  },
  rootHovered: {
    color: theme.palette.neutralDark,
  },
};
