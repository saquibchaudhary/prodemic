import { useNavigate } from "react-router-dom";

const Default = () => {
  const history = useNavigate();

  const handleEvolveClick = () => {
    const mainContent = document.querySelector(".main").innerHTML;
    history("/Editor", { state: { content: mainContent } });
  };
  return (
    <>
      <div className="header">
        <div className="logo">Prodemic - An positive Virus</div>
      </div>
      <div className="main">
        <button className="evolve-button" onClick={handleEvolveClick}>
          Evolve
        </button>
        <div className="editor">
          <h1>Prodemic</h1>
          <p>
            <strong>
              A virus of positive thought created and mutated by every recipient
              who receives it. Turning our global network into an evolutionary
              function for the best piece of text imaginable. A quest for the
              holy grail of vibes.
            </strong>
          </p>
          <p>Engineered By Humans</p>
          <p>
            <strong>Introduction</strong>
          </p>
          <p>
            We used to have faith in the frontier. We would become pioneers and
            colonize distant worlds. Today, we live in the dusk of these
            ambitions. Technology, in which we placed our hopes, has been used
            to vanquish our holy desires with broadcasts of distraction on a
            billion screens.
          </p>
          <p>
            Instead of purpose, we find artificial dopamine and overconsumption.
            Despite economic prosperity, we are confronted with alienation, loss
            of institutional trust, and withdrawal from public life. There is a
            god shaped hole at the heart of our culture, a an invisible nihilism
            that robs us.
          </p>
          <p>
            We need a new sense of purpose. The experience of the pandemic
            ruptured our sense of normalcy and led us to reconsider our way of
            life. The reconfiguration of our relationships over the Internet
            hinted that new modes of social organization were possible. With
            this opportunity in hand, we must ask ourselves: what should we
            align for?
          </p>
          <p>
            The quest for the holy grail offers an answer. We want to live in a
            world that give us a sense of ownership and belonging, with people
            who share our values and dreams. We will find purpose in a quest to
            build a new culture founded on an old insight: that in the final
            analysis, all moral systems, social systems, and political systems
            are judged by the&nbsp;
            <strong>
              <em>vitality</em>
            </strong>
            &nbsp;they produce in a people.
          </p>
          <p>
            With this moral primitive as our compass, we set out on the quest
            for the holy grail of vibes. The holy grail of vibes is a
            representation of that qualia which most clearly and effectively
            fills that god shaped hole within us. It is that holy essence of
            vibes that week to uncover.
          </p>
          <p>
            For individuals, it will spread strength, and virtue. For society,
            it will align the horizons of art, commerce, and technology around
            holiness.
          </p>
          <p>
            <strong>Why Now</strong>
          </p>
          <p>
            Crafting the holiest vibe with input from every person on the globe
            used to be impossible. The core issue was a lack of connectivity,
            holy texts of the past struggled to cross the oceans or the walls of
            the empire they lived in. Each holy text filled the believers in
            with faith, but in an attempt to hold tight the collective
            narrative, denounced the continual search for holiness. At the time,
            global communication was impossible. Beliefs systems were spread on
            the physical plane. Today we have digitized our thoughts and
            personal lives and we have a new opportunity to collectively
            participate in the writing of a positive global narrative and
            philosophy for mankind. A universal philosophy that has no single
            prophet, no walls, and that can change with the times as the world
            sees fit.
          </p>
          <p>
            John Winthrop, the founder of Boston, once preached:&nbsp;
            <em>
              “For we must consider that we shall be as a city upon a hill. The
              eyes of all people are upon us.”
            </em>
            &nbsp;Even from the beginning, they sensed the magnitude of their
            purpose. How do we live up to this example? How will our descendants
            see us? Only great projects, continued in their same spirit, can
            answer. We do not aim for small ends, but to move the world.
          </p>
          <p>
            The coronavirus taught us that when we are so interconnected, bad
            things spreading can change the entire working flow of humanity at
            large. What if we focused on maximizing the spread of something
            positive? What if we changed the course of humanity with a few taps
            of our fingers?
          </p>
          <p>
            With the internet in our hands we have the opportunity to do the
            opposite of the virus. To spread from person to person an anti-virus
            made up of the very words you are reading here.
          </p>
          <p>
            <strong>The Plan</strong>
          </p>
          <p>
            <em>
              Step 1: Software - Create the platform through which information
              can evolve to its highest form.
            </em>
          </p>
          <p>
            If this task is completed, you will find that all of this text is
            editable you’ll find a button labeled “evolve”. From here a link
            will be generated to a new page exactly how you have edited it.
          </p>
          <p>
            <em>Step 2: The People - Getting the word out there.</em>
          </p>
          <p>
            If you received this webpage… the spread is working. The call of
            such a high conquest is a calling to move forward every single human
            in ones life to a higher path. To charge them with a good vibe, a
            positive notion for the future, and a slate to put their own values
            on it.
          </p>
          <p>
            <em>Step 3: Your Turn - Do not kill the lineage</em>
          </p>
          <p>
            If you feel that the receiving of these thoughts, and the idea of a
            prodemic is not a waste of time, but instead recognize the value to
            be gained for each person you share it onward to. Please DO become a
            superspreader. There are applications which will allow you to hit
            your entire contact list. We are at a war for the future, and
            downloading a mass texting app and firing your best prodemic
            information virus strain is the greatest possible good one could do
            within 10 minutes.
          </p>
          <p>
            Whoever brought you to this page infected you with carefully
            concentrated love. For each individual who passes this information
            forward takes the vibes they felt in as positive, and pushes them
            forward as positive marks to the ones they love. They gift to you a
            ticket of participation to this global cause.
          </p>
          <p>
            You are asked now to spread forward this global Prodemic to inspire
            a collective infection of hope and purpose.
          </p>
          <p>
            <strong>
              Its not everyday you get an opportunity to change the course of
              humanity with such ease.
            </strong>
          </p>
        </div>
      </div>
    </>
  );
};

export default Default;
