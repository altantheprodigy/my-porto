import React from "react";

/**
 * @deprecated ServiceCard has been superseded by WhatIDoSection Bento architecture.
 */
interface ServiceCardProps {
  logo?: React.ReactNode;
  title?: string;
  desc?: string;
  color?: string;
}

export default function ServiceCard({
  logo,
  title,
  desc,
  color,
}: ServiceCardProps) {
  return null;
}
