import React from "react";
import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import image from "../assets/images/image.9a65bd94.svg";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
  },

  content: {
    maxWidth: rem(480),
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(44),
    lineHeight: 1.5,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: `${rem(4)} ${rem(12)}`,
  },
}));

const HeroSection = (props) => {
  const { classes } = useStyles();
  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Showcase your{" "}
              <span className={classes.highlight}>digital creations</span> with
              ease using our App!
              <br />{" "}
            </Title>
            <Text color="dimmed" mt="md">
              Our App is the ultimate tool for showcasing
              your digital creations to the world. With its intuitive interface,
              you can easily create, edit, and delete entries in your portfolio,
              allowing you to keep your work up to date and organized.
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck size={rem(12)} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>Effortlessly</b> create, edit, and delete entries in your
                digital portfolio.
              </List.Item>
              <List.Item>
                <b>Impress</b> potential clients or employers with a
                professional and organized digital portfolio.
              </List.Item>
              <List.Item>
                <b>Responsive design</b> ensures your portfolio looks great on
                any device, from desktop to mobile.
              </List.Item>
            </List>

            <Group mt={30}>
              <Button
                onClick={() => props.setOpenDrawer(true)}
                radius="xl"
                size="md"
                className={classes.control}
              >
                Get started
              </Button>
              <Button
                onClick={() =>
                  props.setShowPortofolio((prevState) => !prevState)
                }
                variant="default"
                radius="xl"
                size="md"
                className={classes.control}
              >
                Show Portofolio
              </Button>
            </Group>
          </div>
          <Image src={image} className={classes.image} />
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
