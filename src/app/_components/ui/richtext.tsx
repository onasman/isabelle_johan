import { PortableText, PortableTextProps } from "@portabletext/react";

export function RichText({ value }: PortableTextProps) {
  return (
    <div className="prose">
      <PortableText value={value} />;
    </div>
  );
}
