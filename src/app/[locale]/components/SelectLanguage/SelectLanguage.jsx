import { Select } from "@headlessui/react";
import { useParams } from "next/navigation";
import { useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { routing, Locale, usePathname, useRouter } from "../../../../i18n/routing";

export const SelectLanguage = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();


  function onSelectChange(event) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace({ pathname, params }, { locale: nextLocale });
    });
  }

  return (
    <Select
        className="bg-gray-800 bg-opacity-70 px-3 py-2 rounded-xl text-white 3xl:fixed 3xl:top-8 3xl:right-10 3xl:z-50"
      name="locale"
      aria-label="Locale"
      disabled={isPending}
      defaultValue={locale}
      onChange={onSelectChange}
    >
      {routing.locales.map((cur)=> (
        <option key={cur} value={cur} className="text-white">
             {t('locale', {locale: cur})}
        </option>
      ))}
    </Select>
  );
};
