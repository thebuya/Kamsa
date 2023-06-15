"use client";
import React, { useState, useEffect } from 'react';




interface TeamMember {
  id: number;
  name: string;
  position: string;
}
interface Service {
  id: number;
  name: string;
}

export default function ListofTeam() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    fetch("/api/team")
      .then((res) => res.json())
      .then((data) => setTeam(data));
  }, []);

  useEffect(() => {
    fetch("/api/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);








  return (
    <div className='kamsa-container '>
      <h3>A List of The Teammates:</h3>
      {team.map((teammate) => (
        <ul key={teammate.id}>{teammate.name}{" "}:{" "}{teammate.position}</ul>
      ))}
      <br />
      <br />
      <h3>A List of The Services:</h3>
      {services.map((serve) => (
        <ul key={serve.id}>{serve.name}</ul>
      ))}
    </div>
  );
}
