"use client";
import { Container, Space, Text, Title, Rating, Textarea, Button, Divider, Group, Pagination} from "@mantine/core";
import { useState } from 'react';
import { Footer } from "@components/Footer";

export default function Home() {
  const [value, setValue] = useState(0);
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>

      <Space h="sm"/>

      <Title order={4}>Your rating</Title>

      <Rating value={value} onChange={setValue} defaultValue={0} size="28.5px"/>

      <Textarea label="Your review" placeholder="Do you enjoy eating?" mt="sm" rows={3}/>
      
      <Button variant="filled" color="orange" size="sm" mt="sm">
        Submit Review
      </Button>
      
      <Group grow>
        <Divider my="sm"/>
      </Group>
      
      <Group justify="center" >
        <Title order={4}>
          Elon Musk
        </Title>
        <Rating value={5} readOnly/>
      </Group>
      
      <Text ta="center" c="dimmed" fz="15">
        Best pizza in this world. I give you X score.
      </Text>

      <Divider my="sm" />
      
      <Group justify="center" >
        <Title order={4}>Mark Zuck</Title>
        <Rating value={4} readOnly/>
      </Group>

      <Text ta="center" c="dimmed" fz="15">
        My favourite part is peporoni
      </Text>
      
      <Group justify="center" my="sm">
        <Pagination total={20} color="orange" ></Pagination>
      </Group>

      <Text ta="center" c="grey" my="sm">
        <Footer year="2024" fullName="Wachirawit Chaiyamat" studentId="660612156" />
      </Text>
    </Container>
    
  );
}