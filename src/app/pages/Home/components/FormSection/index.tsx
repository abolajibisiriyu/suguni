import { FC, useState } from "react";
import DatePicker from "react-date-picker";
import { useHistory } from "react-router-dom";

import HomeButton from "../HomeButton";
import { Form as FormEl, FormSectionBox, Textarea, Input } from "./styles";
import ThemePicker from "./ThemePicker";
import Form from "app/models/Form";
import Theme from "app/models/Theme";

const FormSection: FC = (props) => {
  const [form, setForm] = useState<Form>({
    date: new Date().getTime(),
    message: "",
    theme: "BASIC",
    title: "",
  });

  const onThemeChanged = (t: Theme) => setForm((f) => ({ ...f, theme: t }));
  const onDateChanged = (d: any) =>
    setForm((f) => ({ ...f, date: d.getTime() }));
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const el = e.target;
    setForm((f) => ({ ...f, [el.name]: el.value }));
  };

  const history = useHistory();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    history.push({ pathname: "/output", state: form });
  };

  return (
    <FormSectionBox className="animate-on-scroll" id="form-section">
      <h1 className="title">Let's get you started</h1>
      <FormEl onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <Input
            placeholder="Coming Soon!"
            required
            id="title"
            name="title"
            value={form.title}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Date (when do you lauch to the moon?)</label>
          <DatePicker
            name="date"
            minDate={new Date()}
            onChange={onDateChanged}
            value={new Date(form.date)}
            className="date-picker"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <Textarea
            placeholder="Custom Message to your customers"
            spellCheck="true"
            id="message"
            maxLength={230}
            required
            name="message"
            value={form.message}
            onChange={handleInputChange}
          />
        </div>

        <ThemePicker value={form.theme} onChange={onThemeChanged} />

        <HomeButton type="submit">
          <p className="semi-bold text-18">Create Page</p>
        </HomeButton>
      </FormEl>
    </FormSectionBox>
  );
};

export default FormSection;
