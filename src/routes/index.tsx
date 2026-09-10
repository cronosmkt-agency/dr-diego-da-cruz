import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Activity,
  ShieldCheck,
  HeartPulse,
  Droplets,
  AlertCircle,
  FileText,
  Clock,
  MapPin,
  Phone,
  MessageCircle,
  ChevronDown,
  Star,
  ArrowRight,
  Menu,
  X,
  Sparkles,
  Calendar,
  CheckCircle2,
  Stethoscope,
  HeartHandshake,
  UserCheck,
  HelpCircle
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: DiegoDaCruzLandingPage,
});

export default function DiegoDaCruzLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  // Simulator Form State
  const [patientName, setPatientName] = useState("");
  const [consultReason, setConsultReason] = useState("Avaliação de Alteração em Exames (Creatinina/Ureia)");
  const [hasRecentExams, setHasRecentExams] = useState("Sim, tenho exames recentes");
  const [preferredShift, setPreferredShift] = useState("Manhã");
  const [notes, setNotes] = useState("");

  const phone = "5521980840805";
  const phoneDisplay = "(21) 98084-0805";
  const address = "Centro Profissional — R. Dr. José Mendonça Clark, 90 - Sala 409, Várzea, Teresópolis - RJ";
  const hours = "Consultório com atendimento dedicado (Terças a partir das 09:00, com hora marcada)";

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá, Dr. Diego! Vim pelo seu site oficial e gostaria de agendar uma consulta.

*Nome do Paciente:* ${patientName || "Não informado"}
*Motivo da Consulta:* ${consultReason}
*Possui Exames Recentes?* ${hasRecentExams}
*Turno de Preferência:* ${preferredShift}
${notes ? `*Sintomas / Observações:* ${notes}` : ""}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const defaultWhatsAppLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    "Olá, Dr. Diego! Vim pelo site oficial e gostaria de agendar uma consulta médica de Nefrologia / Clínica Geral."
  )}`;

  const renalPillars = [
    {
      title: "Prevenção da Doença Renal Crônica (DRC)",
      tag: "Preservação de Néfrons",
      icon: ShieldCheck,
      desc: "Diagnóstico precoce da queda na filtração glomerular e acompanhamento rigoroso de creatinina e ureia elevadas, com terapias focadas em preservar a saúde dos rins e retardar ou evitar a necessidade de hemodiálise."
    },
    {
      title: "Manejo & Prevenção de Cálculo Renal",
      tag: "Litíase / Pedra nos Rins",
      icon: Droplets,
      desc: "Investigação metabólica personalizada para descobrir por que seu corpo forma cálculos. Orientações alimentares, hidratação correta e tratamento farmacológico para interromper o ciclo recorrente de cólicas agudas."
    },
    {
      title: "Hipertensão Resistente & Diabetes Renal",
      tag: "Órgãos-Alvo",
      icon: HeartPulse,
      desc: "Controle refinado da pressão arterial de difícil manejo e proteção contra a nefropatia diabética, prevenindo a perda progressiva de proteínas na urina (microalbuminúria) e lesões cardiovasculares."
    },
    {
      title: "Infecções Urinárias de Repetição & Cistites",
      tag: "Saúde Urinária",
      icon: Activity,
      desc: "Investigação clínica detalhada de causas anatômicas, bacterianas e metabólicas em episódios recorrentes de infecção na bexiga e nos rins (pielonefrite), com protocolos de profilaxia segura."
    },
    {
      title: "Check-up Clínico Geral & Saúde do Idoso",
      tag: "Clínica Integrada",
      icon: Stethoscope,
      desc: "Visão sistêmica completa para adultos e idosos: avaliação de anemia, eletrólitos, saúde cardiovascular, ajuste seguro de polifarmácia e prevenção de sobrecarga renal por medicamentos."
    },
    {
      title: "Desmistificação Didática de Exames",
      tag: "Consulta sem Pressa",
      icon: FileText,
      desc: "Explicações transparentes e sem jargões complexos sobre laudos de ultrassonografia das vias urinárias, urina de 24 horas e biomarcadores, trazendo segurança e tranquilidade para o paciente e família."
    }
  ];

  const warningSigns = [
    {
      title: "Exames de Sangue ou Urina Alterados",
      desc: "Creatinina ou ureia elevadas no sangue, ou presença de proteína (espuma na urina) e hemácias (urina avermelhada)."
    },
    {
      title: "Histórico Recorrente de Pedras nos Rins",
      desc: "Quem já teve uma crise de cálculo renal tem mais de 50% de chance de reincidência se não investigar a causa metabólica."
    },
    {
      title: "Pressão Arterial Descontrolada",
      desc: "Pressão persistentemente alta mesmo em uso de dois ou mais medicamentos é um dos maiores sinais de sobrecarga renal."
    },
    {
      title: "Inchaço Frequente nas Pernas e Olhos",
      desc: "Retenção excessiva de líquidos pode indicar dificuldade dos rins em filtrar e expelir o excesso de sódio e água do organismo."
    }
  ];

  const testimonials = [
    {
      name: "Thiago Araújo",
      tag: "Paciente Verificado • Google Maps",
      stars: 5,
      content: "Só tenho que elogiar o dr Diego, pois além de ser um excelente médico nefrologista e clínico geral, é um ótimo ser humano, trata todos os pacientes com respeito, atenção e empatia. Recomendo muito!"
    },
    {
      name: "Rogério Aguiar",
      tag: "Paciente Verificado • Google Maps",
      stars: 5,
      content: "Me surpreendeu positivamente e muito. Profissional extremamente dedicado, claro e objetivo nas informações dadas, ótimo custo-benefício. Dificilmente encontrar um profissional com tanta atenção e dedicação ao paciente hoje em dia."
    },
    {
      name: "Thiago Oliveira",
      tag: "Paciente Verificado • Google Maps",
      stars: 5,
      content: "Médico excelente, muito atencioso! Explicou detalhadamente o meu quadro, tirou todas as dúvidas e passou muita tranquilidade durante o atendimento. Melhor nefrologista de Teresópolis."
    }
  ];

  const faqs = [
    {
      q: "O que faz exatamente o médico nefrologista?",
      a: "O nefrologista é o especialista clínico responsável pelo diagnóstico, prevenção e tratamento de todas as doenças do sistema renal e urinário. Isso inclui insuficiência renal aguda e crônica, cálculo renal (pedras), infecções urinárias recorrentes, hipertensão de difícil controle e alterações de filtração causadas por diabetes e medicamentos."
    },
    {
      q: "Ter a creatinina elevada no exame significa que vou precisar de hemodiálise?",
      a: "Não! A alteração de creatinina é um sinal de alerta precoce de que os rins estão trabalhando com sobrecarga. Com acompanhamento médico adequado, ajuste alimentar, hidratação e controle da pressão e glicose, na grande maioria das vezes é possível estabilizar a função renal e evitar completamente a necessidade de diálise."
    },
    {
      q: "É possível evitar que novos cálculos renais (pedras) se formem?",
      a: "Sim. A maioria das pessoas apenas trata a dor da crise no pronto-socorro e não investiga o porquê da formação do cálculo. Na consulta nefrológica, realizamos um estudo metabólico minucioso (análise bioquímica de sangue e urina de 24h) para identificar a causa (oxalato, ácido úrico, cálcio, cistina) e personalizar a dieta e medicação para neutralizar novas pedras."
    },
    {
      q: "O Dr. Diego emite documentação para reembolso junto a planos de saúde?",
      a: "Sim. As consultas no Centro Profissional são particulares para assegurar tempo adequado de atendimento sem a correria típica dos convênios. É emitido recibo médico detalhado com CRM e RQE de Nefrologia para que você solicite o reembolso integral ou parcial junto ao seu plano de saúde."
    },
    {
      q: "Onde fica localizado o consultório e quais são os horários?",
      a: "O consultório está situado no Centro Profissional — R. Dr. José Mendonça Clark, 90, Sala 409, no coração da Várzea, em Teresópolis. Os atendimentos presenciais ocorrem semanalmente (terças-feiras a partir das 09:00), mediante agendamento prévio com hora marcada."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-sky-100 selection:text-sky-900 pb-24 lg:pb-0">
      {/* 1. NAVBAR - HEADER LIMPA SEM ÍCONE */}
      <header className="sticky top-0 z-50 border-b border-sky-900/10 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          {/* Apenas o nome do profissional, sem ícone ao lado */}
          <a href="#" className="group flex flex-col justify-center">
            <span className="text-xl font-bold tracking-tight text-slate-900 transition group-hover:text-sky-700 sm:text-2xl">
              Dr. Diego da Cruz Silva
            </span>
            <span className="text-[11px] font-semibold tracking-wider text-sky-700 uppercase sm:text-xs">
              Nefrologia Clínica & Clínica Geral • Centro Profissional
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex">
            <a href="#diferenciais" className="text-sm font-medium text-slate-600 transition hover:text-sky-700">
              Diferenciais
            </a>
            <a href="#sinais-alerta" className="text-sm font-medium text-slate-600 transition hover:text-sky-700">
              Sinais de Alerta
            </a>
            <a href="#especialidades" className="text-sm font-medium text-slate-600 transition hover:text-sky-700">
              Saúde Renal
            </a>
            <a href="#consultorio" className="text-sm font-medium text-slate-600 transition hover:text-sky-700">
              O Consultório
            </a>
            <a href="#depoimentos" className="text-sm font-medium text-slate-600 transition hover:text-sky-700">
              Depoimentos
            </a>
            <a href="#triagem" className="text-sm font-medium text-slate-600 transition hover:text-sky-700">
              Agendamento
            </a>
            <a href="#faq" className="text-sm font-medium text-slate-600 transition hover:text-sky-700">
              Dúvidas
            </a>
          </nav>

          {/* Direct WhatsApp CTA Button */}
          <div className="hidden items-center gap-3 sm:flex">
            <a
              href={defaultWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#0F2942] px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-sky-950 active:scale-95"
            >
              <MessageCircle className="h-4 w-4 text-sky-400" />
              <span>Agendar no WhatsApp</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-xl p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="border-b border-slate-200 bg-white px-4 pt-3 pb-6 lg:hidden">
            <div className="flex flex-col gap-3">
              <a
                href="#diferenciais"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-700"
              >
                Diferenciais do Atendimento
              </a>
              <a
                href="#sinais-alerta"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-700"
              >
                Quando Procurar um Nefrologista
              </a>
              <a
                href="#especialidades"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-700"
              >
                Saúde Renal & Clínica Geral
              </a>
              <a
                href="#consultorio"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-700"
              >
                Consultório (Sala 409)
              </a>
              <a
                href="#depoimentos"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-700"
              >
                Depoimentos de Pacientes
              </a>
              <a
                href="#triagem"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-700"
              >
                Agendamento Pré-Filtrado
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-700"
              >
                Perguntas Frequentes
              </a>
              <div className="mt-2 pt-2 border-t border-slate-100">
                <a
                  href={defaultWhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0F2942] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-950"
                >
                  <MessageCircle className="h-4 w-4 text-sky-400" />
                  <span>Falar no WhatsApp: (21) 98084-0805</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION COM AUTORIDADE E ACOLHIMENTO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-sky-50/40 to-[#F8FAFC] pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Texto Principal */}
            <div className="lg:col-span-7">
              {/* Badge Google Maps */}
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50/80 px-3.5 py-1.5 text-xs font-semibold text-sky-900 shadow-sm">
                <div className="flex text-amber-500">
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <Star className="h-3.5 w-3.5 fill-current" />
                </div>
                <span>Nota Máxima 5,0 no Google Maps (21 Avaliações Verificadas)</span>
              </div>

              <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-tight">
                Cuidado especializado com a saúde dos seus{" "}
                <span className="text-sky-700">rins</span> e acompanhamento clínico humanizado.
              </h1>

              <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                Medicina diagnóstica precisa no <strong>Centro Profissional (Sala 409)</strong>. Consultas didáticas e 
                sem pressa para prevenção da Doença Renal Crônica, investigação das causas do cálculo renal (pedra nos rins), 
                controle de pressão alta resistente e check-up clínico geral na Várzea, Teresópolis.
              </p>

              {/* Botões de Ação */}
              <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                <a
                  href="#triagem"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0F2942] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-sky-950 active:scale-95"
                >
                  <Calendar className="h-4 w-4 text-sky-400" />
                  <span>Agendar Consulta Médica</span>
                </a>
                <a
                  href={defaultWhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 active:scale-95"
                >
                  <MessageCircle className="h-4 w-4 text-sky-600" />
                  <span>WhatsApp Direto: {phoneDisplay}</span>
                </a>
              </div>

              {/* Badges de Confiança */}
              <div className="mt-10 grid grid-cols-2 gap-4 border-t border-slate-200/80 pt-6 sm:grid-cols-4">
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-sky-800">5,0 ★</span>
                  <span className="text-xs text-slate-600 font-medium">100% Elogios no Google</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-sky-800">Sala 409</span>
                  <span className="text-xs text-slate-600 font-medium">Centro Profissional</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-sky-800">Nefrologia</span>
                  <span className="text-xs text-slate-600 font-medium">CRM-RJ & RQE Oficial</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-sky-800">Didática</span>
                  <span className="text-xs text-slate-600 font-medium">Explicações Acessíveis</span>
                </div>
              </div>
            </div>

            {/* Card Visual Destacado */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md rounded-3xl border border-sky-200/80 bg-white p-6 shadow-xl shadow-sky-950/5 sm:p-8">
                <div className="inline-flex items-center gap-2 rounded-lg bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-800">
                  <ShieldCheck className="h-3.5 w-3.5 text-sky-600" />
                  <span>Preservação e Equilíbrio Renal</span>
                </div>

                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  O que você encontra na consulta com o Dr. Diego:
                </h3>

                <ul className="mt-5 space-y-4 text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-lg bg-sky-100 p-1 text-sky-800">
                      <Clock className="h-4 w-4" />
                    </div>
                    <span><strong>Escuta Atenta e sem Pressa:</strong> tempo suficiente para revisar seu histórico, tirar dúvidas e analisar todos os exames laboratoriais anteriores.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-lg bg-sky-100 p-1 text-sky-800">
                      <Droplets className="h-4 w-4" />
                    </div>
                    <span><strong>Interrupção de Cólicas Renais:</strong> investigação metabólica na urina de 24h para descobrir a causa dos cálculos e impedir novas crises.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-lg bg-sky-100 p-1 text-sky-800">
                      <HeartHandshake className="h-4 w-4" />
                    </div>
                    <span><strong>Medicina Humanizada:</strong> explicação sem termos médicos difíceis para tranquilizar o paciente diante de diagnósticos renais.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-lg bg-sky-100 p-1 text-sky-800">
                      <FileText className="h-4 w-4" />
                    </div>
                    <span><strong>Recibo para Reembolso:</strong> documentação médica detalhada com CRM e RQE para reembolso junto ao seu plano de saúde.</span>
                  </li>
                </ul>

                <div className="mt-6 rounded-2xl bg-slate-50 p-4 border border-slate-200/80">
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    "Trata todos os pacientes com respeito, atenção e empatia. Dificilmente encontrar um profissional com tanta dedicação ao paciente hoje em dia."
                  </p>
                  <p className="mt-2 text-right text-xs font-semibold text-sky-800">
                    — Thiago Araújo & Rogério Aguiar (Google Reviews)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SINAIS DE ALERTA: QUANDO PROCURAR UM NEFROLOGISTA? */}
      <section id="sinais-alerta" className="py-16 bg-white border-y border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-sky-700 uppercase">
              Prevenção & Conscientização
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Quando é o momento de consultar um Nefrologista?
            </h2>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              Os rins realizam a filtragem contínua do sangue e regulam o equilíbrio mineral do corpo. Fique atento a estes 4 sinais essenciais:
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {warningSigns.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:border-sky-300 hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
                  <AlertCircle className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ÁREAS DE ATUAÇÃO / ESPECIALIDADES */}
      <section id="especialidades" className="py-16 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-sky-700 uppercase">
              Especialidades Clínicas
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Saúde Renal Integrada & Clínica Geral
            </h2>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              Diagnósticos fundamentados na ciência médica moderna para proteger seus rins e equilibrar sua saúde global.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {renalPillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:border-sky-300 hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100 text-sky-800">
                        <IconComp className="h-5 w-5" />
                      </div>
                      <span className="rounded-full bg-sky-50 px-2.5 py-1 text-[11px] font-semibold text-sky-800">
                        {pillar.tag}
                      </span>
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-slate-900">{pillar.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">{pillar.desc}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <a
                      href="#triagem"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 hover:text-sky-800"
                    >
                      <span>Solicitar agendamento</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CONSULTÓRIO & LOCALIZAÇÃO (CENTRO PROFISSIONAL - SALA 409) */}
      <section id="consultorio" className="py-16 bg-white border-y border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <span className="text-xs font-bold tracking-widest text-sky-700 uppercase">
                Estrutura & Acesso Central
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Consultório no Centro Profissional (Sala 409)
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                Localizado no Centro Profissional na Várzea, em Teresópolis, o consultório oferece privacidade, acessibilidade 
                com elevador e ambiente calmo para atendimento detalhado:
              </p>

              <div className="mt-6 space-y-3.5 text-sm text-slate-700">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-sky-100 p-1.5 text-sky-800">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span><strong>Endereço:</strong> R. Dr. José Mendonça Clark, 90 - Sala 409 - Várzea, Teresópolis - RJ</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-sky-100 p-1.5 text-sky-800">
                    <Clock className="h-4 w-4" />
                  </div>
                  <span><strong>Atendimento Presencial:</strong> Terças-feiras a partir das 09:00 (Com hora marcada)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-sky-100 p-1.5 text-sky-800">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span><strong>WhatsApp Oficial:</strong> {phoneDisplay}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-sky-100 p-1.5 text-sky-800">
                    <FileText className="h-4 w-4" />
                  </div>
                  <span><strong>Reembolso Médico:</strong> Emissão de recibo completo com CRM e RQE de Nefrologia</span>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-xs font-semibold text-white shadow-sm transition hover:bg-slate-800"
                >
                  <MapPin className="h-4 w-4" />
                  <span>Ver Rotas no Google Maps</span>
                </a>
                <a
                  href={defaultWhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-sky-300 bg-sky-50 px-5 py-3 text-xs font-semibold text-sky-900 transition hover:bg-sky-100"
                >
                  <MessageCircle className="h-4 w-4 text-sky-700" />
                  <span>Agendar via WhatsApp: (21) 98084-0805</span>
                </a>
              </div>
            </div>

            {/* Mapa Embutido Interativo */}
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl border border-slate-200/80 shadow-md">
                <iframe
                  title="Localização Dr Diego da Cruz Silva - Centro Profissional"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.8423405763914!2d-42.97157812383567!3d-22.416200221461905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99b457636e053f%3A0x4a7eb82e887d2ef1!2sR.%20Dr.%20Jos%C3%A9%20Mendon%C3%A7a%20Clark%2C%2090%20-%20V%C3%A1rzea%2C%20Teres%C3%B3polis%20-%20RJ%2C%2025953-560!5e0!3m2!1spt-BR!2sbr!4v1715000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="380"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PROVA SOCIAL: 100% 5 ESTRELAS NO GOOGLE MAPS */}
      <section id="depoimentos" className="py-16 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1 text-amber-500 mb-2">
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
            </div>
            <span className="block text-xs font-bold tracking-widest text-sky-700 uppercase">
              Avaliações Verificadas no Google Maps
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              O que dizem os pacientes do Dr. Diego
            </h2>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              Acolhimento humano, dedicação e didática transparente para cuidar da sua saúde renal.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm"
              >
                <div>
                  <div className="flex text-amber-400">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-slate-600 italic">
                    "{t.content}"
                  </p>
                </div>
                <div className="mt-6 border-t border-slate-100 pt-4">
                  <p className="text-sm font-bold text-slate-900">{t.name}</p>
                  <p className="text-xs text-sky-700 font-medium">{t.tag}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-xl bg-sky-50 px-4 py-2 border border-sky-200/70 text-xs font-medium text-sky-900">
              <Sparkles className="h-4 w-4 text-sky-600" />
              <span>Destaque das avaliações: "Profissional extremamente dedicado, claro e objetivo nas informações dadas, ótimo custo-benefício."</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SIMULADOR DE TRIAGEM & AGENDAMENTO PRÉ-FILTRADO */}
      <section id="triagem" className="py-16 bg-white border-t border-slate-200/80">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-sky-200/80 bg-gradient-to-b from-sky-50/50 to-white p-6 shadow-lg sm:p-10">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold tracking-widest text-sky-700 uppercase">
                Agendamento Rápido & Confidencial
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Triagem para Consulta Nefrológica / Clínica
              </h2>
              <p className="mt-3 text-xs text-slate-600 sm:text-sm">
                Preencha as informações para encaminhar sua mensagem pré-formatada diretamente para o WhatsApp do consultório, facilitando a marcação do seu horário.
              </p>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="mt-8 space-y-6">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Nome Completo do Paciente
                </label>
                <input
                  type="text"
                  required
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  placeholder="Ex: Rogério Aguiar"
                  className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Motivo Principal da Consulta
                  </label>
                  <select
                    value={consultReason}
                    onChange={(e) => setConsultReason(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  >
                    <option value="Avaliação de Alteração em Exames (Creatinina/Ureia)">Avaliação de Alteração em Exames (Creatinina/Ureia)</option>
                    <option value="Tratamento / Prevenção de Cálculo Renal (Pedra nos Rins)">Tratamento / Prevenção de Cálculo Renal (Pedra nos Rins)</option>
                    <option value="Controle de Pressão Alta Resistente / Diabetes Renal">Controle de Pressão Alta Resistente / Diabetes Renal</option>
                    <option value="Infecção Urinária Recorrente / Cistite">Infecção Urinária Recorrente / Cistite</option>
                    <option value="Check-up Clínico Geral / Acompanhamento">Check-up Clínico Geral / Acompanhamento</option>
                    <option value="Segunda Opinião sobre Laudo Renal">Segunda Opinião sobre Laudo Renal</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Já Possui Exames Recentes?
                  </label>
                  <select
                    value={hasRecentExams}
                    onChange={(e) => setHasRecentExams(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  >
                    <option value="Sim, tenho exames de sangue/urina recentes">Sim, tenho exames de sangue/urina recentes</option>
                    <option value="Tenho ultrassonografia das vias urinárias">Tenho ultrassonografia das vias urinárias</option>
                    <option value="Não tenho exames recentes (preciso de solicitação)">Não tenho exames recentes (preciso de solicitação)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Turno de Preferência
                </label>
                <div className="mt-2 flex gap-4">
                  {["Manhã", "Tarde", "Qualquer Horário"].map((shift) => (
                    <label
                      key={shift}
                      className={`flex flex-1 cursor-pointer items-center justify-center rounded-xl border py-2.5 text-xs font-medium transition ${
                        preferredShift === shift
                          ? "border-sky-600 bg-sky-50 text-sky-900 font-bold"
                          : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="preferredShift"
                        value={shift}
                        checked={preferredShift === shift}
                        onChange={() => setPreferredShift(shift)}
                        className="sr-only"
                      />
                      <span>{shift}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Sintomas ou Histórico Prévia (Opcional)
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ex: Tive cólica renal recente ou minha creatinina deu 1.4 no último exame de rotina."
                  className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-[#0F2942] py-4 text-sm font-bold text-white shadow-md transition hover:bg-sky-950 active:scale-95 flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5 text-sky-400" />
                <span>Enviar Solicitação para o WhatsApp: (21) 98084-0805</span>
              </button>

              <p className="text-center text-[11px] text-slate-500">
                Atendimentos às terças a partir das 09:00 com hora marcada. Seus dados são protegidos por sigilo médico.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* 8. FAQ ESCLARECEDOR */}
      <section id="faq" className="py-16 bg-[#F8FAFC] border-t border-slate-200/80">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-sky-700 uppercase">
              Dúvidas Frequentes
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Perguntas Frequentes sobre Nefrologia
            </h2>
          </div>

          <div className="mt-10 space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = faqOpen === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden transition"
                >
                  <button
                    type="button"
                    onClick={() => setFaqOpen(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between p-5 text-left text-sm font-bold text-slate-900 hover:text-sky-700"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-slate-500 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-sky-600" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm leading-relaxed text-slate-600 border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. RODAPÉ INSTITUCIONAL */}
      <footer className="border-t border-slate-200 bg-white py-12 text-slate-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <span className="text-base font-bold text-slate-900">
                Dr. Diego da Cruz Silva
              </span>
              <p className="mt-1 text-xs text-sky-700 font-semibold">
                Nefrologia Clínica & Clínica Geral
              </p>
              <p className="mt-3 text-xs leading-relaxed text-slate-500">
                Acompanhamento especializado para a saúde dos seus rins, prevenção de complicações renais e check-up clínico geral com empatia e didática.
              </p>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                O Consultório
              </span>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Centro Profissional<br />
                R. Dr. José Mendonça Clark, 90 - Sala 409<br />
                Várzea, Teresópolis - RJ, 25953-560
              </p>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Atendimento & WhatsApp
              </span>
              <p className="mt-2 text-xs text-slate-600">
                WhatsApp: {phoneDisplay}<br />
                Terças-feiras a partir das 09:00<br />
                Agendamento prévio com hora marcada
              </p>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Informações Legais
              </span>
              <p className="mt-2 text-xs text-slate-600">
                CRM-RJ • RQE Nefrologia<br />
                Consultas particulares com emissão de recibo para solicitação de reembolso no seu plano de saúde.
              </p>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-200 pt-6 text-center text-xs text-slate-400">
            <p>© {new Date().getFullYear()} Dr. Diego da Cruz Silva — Nefrologia Clínica e Clínica Geral. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* 10. BARRA FLUTUANTE FIXA MOBILE */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-sky-900/10 bg-white/95 p-3 shadow-lg backdrop-blur-md lg:hidden">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <span className="block text-xs font-bold text-slate-900">Dr. Diego da Cruz Silva</span>
            <span className="block text-[11px] text-sky-700 font-medium">Nefrologia & Clínica Geral</span>
          </div>
          <a
            href={defaultWhatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#0F2942] px-4 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-sky-950 active:scale-95"
          >
            <MessageCircle className="h-4 w-4 text-sky-400" />
            <span>Agendar Consulta</span>
          </a>
        </div>
      </div>
    </div>
  );
}
