import CodeComponent from "@/components/code";

export default function SampleCode() {
  const code = `<div id="embed-feedbacks"></div>
<script src="${process.env.NEXT_PUBLIC_BASE_URL}api/embed-feedbacks?productId=cm0w1ywfi0000avxg97mkple4"></script>`;

  return <CodeComponent code={code} />;
}
