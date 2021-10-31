import Api from "./api";

export default function client() {
  return {
    api: Api(),
  };
}
