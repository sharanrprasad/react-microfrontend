import {ChangeEvent, FormEvent, useState} from "react";
import {MfeEvents, UserProfileUpdatedEventData} from "@or/models";

interface FormState {
  email: string;
  name: string;
}

const UserProfilePage = () => {
  const [formState, setFormState] = useState<FormState>({
    email: "",
    name: "",
  });

  const onFormChange =
    (key: keyof FormState) => (event: ChangeEvent<HTMLInputElement>) => {
      setFormState({ ...formState, [key]: event.target.value });
    };

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(!formState.email || !formState.name) {
      return;
    }
    window.dispatchEvent(
      new CustomEvent<UserProfileUpdatedEventData>(
        MfeEvents.USER_UPDATED_EVENT,
        { detail: { isComplete: true } },
      ),
    );
  };

  return (
    <div>
      <p>Hello, Profile Page</p>
      <form
        onSubmit={onFormSubmit}
      >
        <input
          type="email"
          placeholder="Email"
          value={formState.email}
          onChange={onFormChange("email")}
        />
        <input
          type="text"
          placeholder="Name"
          value={formState.name}
          onChange={onFormChange("name")}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserProfilePage;
