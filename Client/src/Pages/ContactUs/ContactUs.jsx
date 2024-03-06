import React from "react";
import { Container, Title, Text, Button, Group } from "@mantine/core";

const ContactPage = () => {
  return (
    <Container size={600} mt={30} style={{ height: "28rem" }}>
      <Title order={2} mb={20}>
        Contact Us
      </Title>
      <Text mb={20}>
        If you have any questions or concerns, please feel free to contact us.
        We will get back to you as soon as possible.
      </Text>
      <Group position="right">
        <Button variant="outline" size="md">
          Cancel
        </Button>
        <Button variant="filled" size="md">
          Send message
        </Button>
      </Group>
    </Container>
  );
};

export default ContactPage;
