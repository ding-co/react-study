import React from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';

export function Home() {
  return (
    <div style={{ width: '400px' }}>
      <h1>[홈페이지]</h1>
      <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link to="about">회사 소개</Link>
        <Link to="events">이벤트</Link>
        <Link to="products">제품</Link>
        <Link to="contact">고객 지원</Link>
      </nav>
    </div>
  );
}

export function About() {
  return (
    <div>
      <h1>[회사소개]</h1>
      <Outlet />
    </div>
  );
}

export function Events() {
  return (
    <div>
      <h1>[이벤트]</h1>
    </div>
  );
}

export function Products() {
  return (
    <div>
      <h1>[제품]</h1>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <h1>[고객지원]</h1>
    </div>
  );
}

export function Whoops404() {
  let location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>Resource not found at {location.pathname}</h1>
    </div>
  );
}

export function Services() {
  return (
    <section>
      <h2>Our Services</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </section>
  );
}

export function History() {
  return (
    <section>
      <h2>Our History</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </section>
  );
}

export function Location() {
  return (
    <section>
      <h2>Our Location</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </section>
  );
}
